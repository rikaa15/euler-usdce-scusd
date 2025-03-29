import { VaultStatus } from "../generated/EVault/EVault"
import { Market } from "../generated/schema"
import { BigDecimal, BigInt, Address, log } from "@graphprotocol/graph-ts"
import { EVault } from "../generated/EVault/EVault"

const SECONDS_PER_YEAR = BigInt.fromI32(365 * 24 * 60 * 60)
const RAY = BigDecimal.fromString("1e27")
const VAULT_ID = "USDCe-scUSD"
const COLLATERAL_ADDRESS = "0xB38D431e932fEa77d1dF0AE0dFE4400c97e597B8"

// Manually defined Merkl reward APRs
const STATIC_REWARD_SUPPLY_APR = BigDecimal.fromString("0.0336") // 3.36%
const STATIC_REWARD_BORROW_APR = BigDecimal.fromString("0.0030") // 0.30%

export function handleVaultStatus(event: VaultStatus): void {
  log.info("✅ VaultStatus received at block {}", [event.block.number.toString()])

  let market = Market.load(VAULT_ID)
  if (!market) {
    market = new Market(VAULT_ID)
  }

  let vault = EVault.bind(event.address)

  let interestRate = event.params.interestRate.toBigDecimal().div(RAY)
  let baseBorrowAPY = interestRate.times(SECONDS_PER_YEAR.toBigDecimal())

  let feeBps = vault.interestFee()
  let feeDecimal = BigDecimal.fromString(feeBps.toString()).div(BigDecimal.fromString("10000"))
  let lendingAPY = baseBorrowAPY.times(BigDecimal.fromString("1").minus(feeDecimal))

  let rewardSupplyAPY = STATIC_REWARD_SUPPLY_APR
  let rewardBorrowAPY = STATIC_REWARD_BORROW_APR

  let totalSupplyAPY = lendingAPY.plus(rewardSupplyAPY)
  let netBorrowAPY = baseBorrowAPY.minus(rewardBorrowAPY)

  let ltvFull = vault.LTVFull(Address.fromString(COLLATERAL_ADDRESS))
  let borrowLTV = BigDecimal.fromString(ltvFull.value0.toString()).div(BigDecimal.fromString("100")) // percent
  let liquidationLTV = BigDecimal.fromString(ltvFull.value1.toString()).div(BigDecimal.fromString("100")) // percent

  let one = BigDecimal.fromString("1")
  let liquidationLTVDecimal = BigDecimal.fromString(ltvFull.value1.toString()).div(BigDecimal.fromString("10000"))
  let maxMultiplier = one.div(one.minus(liquidationLTVDecimal))

  let roe = maxMultiplier.times(totalSupplyAPY).minus(maxMultiplier.minus(one).times(netBorrowAPY))

  let vaultImpl = EVault.bind(Address.fromString("0xB38D431e932fEa77d1dF0AE0dFE4400c97e597B8"))
  let cash = vaultImpl.cash()
  let liquidity = cash.toBigDecimal().div(BigDecimal.fromString("1e6")) // USDC = 6 decimals

  market.supplyAPY = totalSupplyAPY.times(BigDecimal.fromString("100"))
  market.borrowAPY = netBorrowAPY.times(BigDecimal.fromString("100"))
  market.maxROE = roe.times(BigDecimal.fromString("100"))
  market.maxMultiplier = maxMultiplier
  market.availableLiquidity = liquidity
  market.rewardAPR7d = rewardSupplyAPY.times(BigDecimal.fromString("100"))
  market.borrowLTV = borrowLTV
  market.liquidationLTV = liquidationLTV

  market.save()
}
