// src/mapping.ts
import { VaultStatus } from "../generated/EVault/EVault"
import { Market } from "../generated/schema"
import { BigDecimal, BigInt, Address, log } from "@graphprotocol/graph-ts"
import { EVault } from "../generated/EVault/EVault"

const SECONDS_PER_YEAR = BigInt.fromI32(365 * 24 * 60 * 60)
const RAY = BigDecimal.fromString("1e18")
const VAULT_ID = "USDCe-scUSD"
const COLLATERAL_ADDRESS = "0x29219dd400f2Bf60E5a23d13Be72B486D4038894"

export function handleVaultStatus(event: VaultStatus): void {
  log.info("✅ VaultStatus received at block {}", [event.block.number.toString()])
  let market = Market.load(VAULT_ID)
  if (!market) {
    market = new Market(VAULT_ID)
  }

  let vault = EVault.bind(event.address)

  // Borrowing interest rate
  let interestRate = event.params.interestRate.toBigDecimal().div(RAY)
  let baseBorrowAPY = interestRate.times(SECONDS_PER_YEAR.toBigDecimal())

  // Supply APY from lending (post-fee)
  let feeBps = vault.interestFee()
  let feeDecimal = BigDecimal.fromString(feeBps.toString()).div(BigDecimal.fromString("10000"))
  let lendingAPY = baseBorrowAPY.times(BigDecimal.fromString("1").minus(feeDecimal))

  // Reward APYs (static for now — real versions should come from incentives contract)
  let rewardSupplyAPY = BigDecimal.fromString("0.0391") // 3.91% for suppliers
  let rewardBorrowAPY = BigDecimal.fromString("0.0034") // 0.34% for borrowers

  let totalSupplyAPY = lendingAPY.plus(rewardSupplyAPY)
  let netBorrowAPY = baseBorrowAPY.minus(rewardBorrowAPY)

  // Max Multiplier from LLTV
  let lltvRaw = vault.LTVBorrow(Address.fromString(COLLATERAL_ADDRESS))
  let lltv = BigDecimal.fromString(lltvRaw.toString()).div(BigDecimal.fromString("10000"))
  let maxMultiplier = BigDecimal.fromString("1").div(BigDecimal.fromString("1").minus(lltv))

  // Max ROE = M * Supply APY - (M - 1) * Borrow APY
  let one = BigDecimal.fromString("1")
  let roe = maxMultiplier.times(totalSupplyAPY)
    .minus(maxMultiplier.minus(one).times(netBorrowAPY))

  // Available liquidity
  let liquidity = event.params.cash.toBigDecimal().div(RAY)

  market.supplyAPY = totalSupplyAPY
  market.borrowAPY = netBorrowAPY
  market.maxROE = roe
  market.maxMultiplier = maxMultiplier
  market.availableLiquidity = liquidity

  market.save()
}