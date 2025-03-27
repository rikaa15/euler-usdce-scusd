import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  BalanceForwarderStatus,
  Borrow,
  ConvertFees,
  DebtSocialized,
  Deposit,
  EVaultCreated,
  GovSetCaps,
  GovSetConfigFlags,
  GovSetFeeReceiver,
  GovSetGovernorAdmin,
  GovSetHookConfig,
  GovSetInterestFee,
  GovSetInterestRateModel,
  GovSetLTV,
  GovSetLiquidationCoolOffTime,
  GovSetMaxLiquidationDiscount,
  InterestAccrued,
  Liquidate,
  PullDebt,
  Repay,
  Transfer,
  VaultStatus,
  Withdraw
} from "../generated/EVault/EVault"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createBalanceForwarderStatusEvent(
  account: Address,
  status: boolean
): BalanceForwarderStatus {
  let balanceForwarderStatusEvent =
    changetype<BalanceForwarderStatus>(newMockEvent())

  balanceForwarderStatusEvent.parameters = new Array()

  balanceForwarderStatusEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  balanceForwarderStatusEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return balanceForwarderStatusEvent
}

export function createBorrowEvent(account: Address, assets: BigInt): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromUnsignedBigInt(assets))
  )

  return borrowEvent
}

export function createConvertFeesEvent(
  sender: Address,
  protocolReceiver: Address,
  governorReceiver: Address,
  protocolShares: BigInt,
  governorShares: BigInt
): ConvertFees {
  let convertFeesEvent = changetype<ConvertFees>(newMockEvent())

  convertFeesEvent.parameters = new Array()

  convertFeesEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  convertFeesEvent.parameters.push(
    new ethereum.EventParam(
      "protocolReceiver",
      ethereum.Value.fromAddress(protocolReceiver)
    )
  )
  convertFeesEvent.parameters.push(
    new ethereum.EventParam(
      "governorReceiver",
      ethereum.Value.fromAddress(governorReceiver)
    )
  )
  convertFeesEvent.parameters.push(
    new ethereum.EventParam(
      "protocolShares",
      ethereum.Value.fromUnsignedBigInt(protocolShares)
    )
  )
  convertFeesEvent.parameters.push(
    new ethereum.EventParam(
      "governorShares",
      ethereum.Value.fromUnsignedBigInt(governorShares)
    )
  )

  return convertFeesEvent
}

export function createDebtSocializedEvent(
  account: Address,
  assets: BigInt
): DebtSocialized {
  let debtSocializedEvent = changetype<DebtSocialized>(newMockEvent())

  debtSocializedEvent.parameters = new Array()

  debtSocializedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  debtSocializedEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromUnsignedBigInt(assets))
  )

  return debtSocializedEvent
}

export function createDepositEvent(
  sender: Address,
  owner: Address,
  assets: BigInt,
  shares: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromUnsignedBigInt(assets))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )

  return depositEvent
}

export function createEVaultCreatedEvent(
  creator: Address,
  asset: Address,
  dToken: Address
): EVaultCreated {
  let eVaultCreatedEvent = changetype<EVaultCreated>(newMockEvent())

  eVaultCreatedEvent.parameters = new Array()

  eVaultCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  eVaultCreatedEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  eVaultCreatedEvent.parameters.push(
    new ethereum.EventParam("dToken", ethereum.Value.fromAddress(dToken))
  )

  return eVaultCreatedEvent
}

export function createGovSetCapsEvent(
  newSupplyCap: i32,
  newBorrowCap: i32
): GovSetCaps {
  let govSetCapsEvent = changetype<GovSetCaps>(newMockEvent())

  govSetCapsEvent.parameters = new Array()

  govSetCapsEvent.parameters.push(
    new ethereum.EventParam(
      "newSupplyCap",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newSupplyCap))
    )
  )
  govSetCapsEvent.parameters.push(
    new ethereum.EventParam(
      "newBorrowCap",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newBorrowCap))
    )
  )

  return govSetCapsEvent
}

export function createGovSetConfigFlagsEvent(
  newConfigFlags: BigInt
): GovSetConfigFlags {
  let govSetConfigFlagsEvent = changetype<GovSetConfigFlags>(newMockEvent())

  govSetConfigFlagsEvent.parameters = new Array()

  govSetConfigFlagsEvent.parameters.push(
    new ethereum.EventParam(
      "newConfigFlags",
      ethereum.Value.fromUnsignedBigInt(newConfigFlags)
    )
  )

  return govSetConfigFlagsEvent
}

export function createGovSetFeeReceiverEvent(
  newFeeReceiver: Address
): GovSetFeeReceiver {
  let govSetFeeReceiverEvent = changetype<GovSetFeeReceiver>(newMockEvent())

  govSetFeeReceiverEvent.parameters = new Array()

  govSetFeeReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "newFeeReceiver",
      ethereum.Value.fromAddress(newFeeReceiver)
    )
  )

  return govSetFeeReceiverEvent
}

export function createGovSetGovernorAdminEvent(
  newGovernorAdmin: Address
): GovSetGovernorAdmin {
  let govSetGovernorAdminEvent = changetype<GovSetGovernorAdmin>(newMockEvent())

  govSetGovernorAdminEvent.parameters = new Array()

  govSetGovernorAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newGovernorAdmin",
      ethereum.Value.fromAddress(newGovernorAdmin)
    )
  )

  return govSetGovernorAdminEvent
}

export function createGovSetHookConfigEvent(
  newHookTarget: Address,
  newHookedOps: BigInt
): GovSetHookConfig {
  let govSetHookConfigEvent = changetype<GovSetHookConfig>(newMockEvent())

  govSetHookConfigEvent.parameters = new Array()

  govSetHookConfigEvent.parameters.push(
    new ethereum.EventParam(
      "newHookTarget",
      ethereum.Value.fromAddress(newHookTarget)
    )
  )
  govSetHookConfigEvent.parameters.push(
    new ethereum.EventParam(
      "newHookedOps",
      ethereum.Value.fromUnsignedBigInt(newHookedOps)
    )
  )

  return govSetHookConfigEvent
}

export function createGovSetInterestFeeEvent(newFee: i32): GovSetInterestFee {
  let govSetInterestFeeEvent = changetype<GovSetInterestFee>(newMockEvent())

  govSetInterestFeeEvent.parameters = new Array()

  govSetInterestFeeEvent.parameters.push(
    new ethereum.EventParam(
      "newFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newFee))
    )
  )

  return govSetInterestFeeEvent
}

export function createGovSetInterestRateModelEvent(
  newInterestRateModel: Address
): GovSetInterestRateModel {
  let govSetInterestRateModelEvent =
    changetype<GovSetInterestRateModel>(newMockEvent())

  govSetInterestRateModelEvent.parameters = new Array()

  govSetInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return govSetInterestRateModelEvent
}

export function createGovSetLTVEvent(
  collateral: Address,
  borrowLTV: i32,
  liquidationLTV: i32,
  initialLiquidationLTV: i32,
  targetTimestamp: BigInt,
  rampDuration: BigInt
): GovSetLTV {
  let govSetLtvEvent = changetype<GovSetLTV>(newMockEvent())

  govSetLtvEvent.parameters = new Array()

  govSetLtvEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromAddress(collateral)
    )
  )
  govSetLtvEvent.parameters.push(
    new ethereum.EventParam(
      "borrowLTV",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(borrowLTV))
    )
  )
  govSetLtvEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationLTV",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(liquidationLTV))
    )
  )
  govSetLtvEvent.parameters.push(
    new ethereum.EventParam(
      "initialLiquidationLTV",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(initialLiquidationLTV))
    )
  )
  govSetLtvEvent.parameters.push(
    new ethereum.EventParam(
      "targetTimestamp",
      ethereum.Value.fromUnsignedBigInt(targetTimestamp)
    )
  )
  govSetLtvEvent.parameters.push(
    new ethereum.EventParam(
      "rampDuration",
      ethereum.Value.fromUnsignedBigInt(rampDuration)
    )
  )

  return govSetLtvEvent
}

export function createGovSetLiquidationCoolOffTimeEvent(
  newCoolOffTime: i32
): GovSetLiquidationCoolOffTime {
  let govSetLiquidationCoolOffTimeEvent =
    changetype<GovSetLiquidationCoolOffTime>(newMockEvent())

  govSetLiquidationCoolOffTimeEvent.parameters = new Array()

  govSetLiquidationCoolOffTimeEvent.parameters.push(
    new ethereum.EventParam(
      "newCoolOffTime",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newCoolOffTime))
    )
  )

  return govSetLiquidationCoolOffTimeEvent
}

export function createGovSetMaxLiquidationDiscountEvent(
  newDiscount: i32
): GovSetMaxLiquidationDiscount {
  let govSetMaxLiquidationDiscountEvent =
    changetype<GovSetMaxLiquidationDiscount>(newMockEvent())

  govSetMaxLiquidationDiscountEvent.parameters = new Array()

  govSetMaxLiquidationDiscountEvent.parameters.push(
    new ethereum.EventParam(
      "newDiscount",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newDiscount))
    )
  )

  return govSetMaxLiquidationDiscountEvent
}

export function createInterestAccruedEvent(
  account: Address,
  assets: BigInt
): InterestAccrued {
  let interestAccruedEvent = changetype<InterestAccrued>(newMockEvent())

  interestAccruedEvent.parameters = new Array()

  interestAccruedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  interestAccruedEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromUnsignedBigInt(assets))
  )

  return interestAccruedEvent
}

export function createLiquidateEvent(
  liquidator: Address,
  violator: Address,
  collateral: Address,
  repayAssets: BigInt,
  yieldBalance: BigInt
): Liquidate {
  let liquidateEvent = changetype<Liquidate>(newMockEvent())

  liquidateEvent.parameters = new Array()

  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam("violator", ethereum.Value.fromAddress(violator))
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromAddress(collateral)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "repayAssets",
      ethereum.Value.fromUnsignedBigInt(repayAssets)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "yieldBalance",
      ethereum.Value.fromUnsignedBigInt(yieldBalance)
    )
  )

  return liquidateEvent
}

export function createPullDebtEvent(
  from: Address,
  to: Address,
  assets: BigInt
): PullDebt {
  let pullDebtEvent = changetype<PullDebt>(newMockEvent())

  pullDebtEvent.parameters = new Array()

  pullDebtEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  pullDebtEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  pullDebtEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromUnsignedBigInt(assets))
  )

  return pullDebtEvent
}

export function createRepayEvent(account: Address, assets: BigInt): Repay {
  let repayEvent = changetype<Repay>(newMockEvent())

  repayEvent.parameters = new Array()

  repayEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromUnsignedBigInt(assets))
  )

  return repayEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createVaultStatusEvent(
  totalShares: BigInt,
  totalBorrows: BigInt,
  accumulatedFees: BigInt,
  cash: BigInt,
  interestAccumulator: BigInt,
  interestRate: BigInt,
  timestamp: BigInt
): VaultStatus {
  let vaultStatusEvent = changetype<VaultStatus>(newMockEvent())

  vaultStatusEvent.parameters = new Array()

  vaultStatusEvent.parameters.push(
    new ethereum.EventParam(
      "totalShares",
      ethereum.Value.fromUnsignedBigInt(totalShares)
    )
  )
  vaultStatusEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )
  vaultStatusEvent.parameters.push(
    new ethereum.EventParam(
      "accumulatedFees",
      ethereum.Value.fromUnsignedBigInt(accumulatedFees)
    )
  )
  vaultStatusEvent.parameters.push(
    new ethereum.EventParam("cash", ethereum.Value.fromUnsignedBigInt(cash))
  )
  vaultStatusEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulator",
      ethereum.Value.fromUnsignedBigInt(interestAccumulator)
    )
  )
  vaultStatusEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )
  vaultStatusEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return vaultStatusEvent
}

export function createWithdrawEvent(
  sender: Address,
  receiver: Address,
  owner: Address,
  assets: BigInt,
  shares: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("assets", ethereum.Value.fromUnsignedBigInt(assets))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("shares", ethereum.Value.fromUnsignedBigInt(shares))
  )

  return withdrawEvent
}
