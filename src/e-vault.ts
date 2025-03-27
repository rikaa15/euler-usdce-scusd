import {
  Approval as ApprovalEvent,
  BalanceForwarderStatus as BalanceForwarderStatusEvent,
  Borrow as BorrowEvent,
  ConvertFees as ConvertFeesEvent,
  DebtSocialized as DebtSocializedEvent,
  Deposit as DepositEvent,
  EVaultCreated as EVaultCreatedEvent,
  GovSetCaps as GovSetCapsEvent,
  GovSetConfigFlags as GovSetConfigFlagsEvent,
  GovSetFeeReceiver as GovSetFeeReceiverEvent,
  GovSetGovernorAdmin as GovSetGovernorAdminEvent,
  GovSetHookConfig as GovSetHookConfigEvent,
  GovSetInterestFee as GovSetInterestFeeEvent,
  GovSetInterestRateModel as GovSetInterestRateModelEvent,
  GovSetLTV as GovSetLTVEvent,
  GovSetLiquidationCoolOffTime as GovSetLiquidationCoolOffTimeEvent,
  GovSetMaxLiquidationDiscount as GovSetMaxLiquidationDiscountEvent,
  InterestAccrued as InterestAccruedEvent,
  Liquidate as LiquidateEvent,
  PullDebt as PullDebtEvent,
  Repay as RepayEvent,
  Transfer as TransferEvent,
  VaultStatus as VaultStatusEvent,
  Withdraw as WithdrawEvent
} from "../generated/EVault/EVault"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBalanceForwarderStatus(
  event: BalanceForwarderStatusEvent
): void {
  let entity = new BalanceForwarderStatus(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBorrow(event: BorrowEvent): void {
  let entity = new Borrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.assets = event.params.assets

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConvertFees(event: ConvertFeesEvent): void {
  let entity = new ConvertFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.protocolReceiver = event.params.protocolReceiver
  entity.governorReceiver = event.params.governorReceiver
  entity.protocolShares = event.params.protocolShares
  entity.governorShares = event.params.governorShares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDebtSocialized(event: DebtSocializedEvent): void {
  let entity = new DebtSocialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.assets = event.params.assets

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.owner = event.params.owner
  entity.assets = event.params.assets
  entity.shares = event.params.shares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEVaultCreated(event: EVaultCreatedEvent): void {
  let entity = new EVaultCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.asset = event.params.asset
  entity.dToken = event.params.dToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetCaps(event: GovSetCapsEvent): void {
  let entity = new GovSetCaps(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSupplyCap = event.params.newSupplyCap
  entity.newBorrowCap = event.params.newBorrowCap

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetConfigFlags(event: GovSetConfigFlagsEvent): void {
  let entity = new GovSetConfigFlags(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newConfigFlags = event.params.newConfigFlags

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetFeeReceiver(event: GovSetFeeReceiverEvent): void {
  let entity = new GovSetFeeReceiver(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFeeReceiver = event.params.newFeeReceiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetGovernorAdmin(
  event: GovSetGovernorAdminEvent
): void {
  let entity = new GovSetGovernorAdmin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newGovernorAdmin = event.params.newGovernorAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetHookConfig(event: GovSetHookConfigEvent): void {
  let entity = new GovSetHookConfig(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newHookTarget = event.params.newHookTarget
  entity.newHookedOps = event.params.newHookedOps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetInterestFee(event: GovSetInterestFeeEvent): void {
  let entity = new GovSetInterestFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFee = event.params.newFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetInterestRateModel(
  event: GovSetInterestRateModelEvent
): void {
  let entity = new GovSetInterestRateModel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newInterestRateModel = event.params.newInterestRateModel

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetLTV(event: GovSetLTVEvent): void {
  let entity = new GovSetLTV(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collateral = event.params.collateral
  entity.borrowLTV = event.params.borrowLTV
  entity.liquidationLTV = event.params.liquidationLTV
  entity.initialLiquidationLTV = event.params.initialLiquidationLTV
  entity.targetTimestamp = event.params.targetTimestamp
  entity.rampDuration = event.params.rampDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetLiquidationCoolOffTime(
  event: GovSetLiquidationCoolOffTimeEvent
): void {
  let entity = new GovSetLiquidationCoolOffTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newCoolOffTime = event.params.newCoolOffTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovSetMaxLiquidationDiscount(
  event: GovSetMaxLiquidationDiscountEvent
): void {
  let entity = new GovSetMaxLiquidationDiscount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newDiscount = event.params.newDiscount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInterestAccrued(event: InterestAccruedEvent): void {
  let entity = new InterestAccrued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.assets = event.params.assets

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidate(event: LiquidateEvent): void {
  let entity = new Liquidate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.liquidator = event.params.liquidator
  entity.violator = event.params.violator
  entity.collateral = event.params.collateral
  entity.repayAssets = event.params.repayAssets
  entity.yieldBalance = event.params.yieldBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePullDebt(event: PullDebtEvent): void {
  let entity = new PullDebt(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.assets = event.params.assets

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRepay(event: RepayEvent): void {
  let entity = new Repay(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.assets = event.params.assets

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVaultStatus(event: VaultStatusEvent): void {
  let entity = new VaultStatus(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.totalShares = event.params.totalShares
  entity.totalBorrows = event.params.totalBorrows
  entity.accumulatedFees = event.params.accumulatedFees
  entity.cash = event.params.cash
  entity.interestAccumulator = event.params.interestAccumulator
  entity.interestRate = event.params.interestRate
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.owner = event.params.owner
  entity.assets = event.params.assets
  entity.shares = event.params.shares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
