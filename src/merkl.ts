import { RewardDistributed } from "../generated/MerklDistributor/MerklDistributor"
import { RewardEvent, Market } from "../generated/schema"
import { BigDecimal, BigInt, log } from "@graphprotocol/graph-ts"

const CAMPAIGNS = [
  "0x2cd6055637ec8ad652a23fa476d17b9aacb6241fc9226b1fd7031cb28c2c1804",
  "0xbf788b004ffed4647ed95ff5f472a5574e2598aa29442f5cfc596e03a94464d5"
]
const VAULT_ID = "USDCe-scUSD"
const SECONDS_IN_7DAYS = 604800

export function handleRewardDistributed(event: RewardDistributed): void {
  let campaign = event.params.campaign.toHexString().toLowerCase()
  if (!CAMPAIGNS.includes(campaign)){
    log.info("❌ Skipping campaign {}", [campaign])
    return
  }

  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let reward = new RewardEvent(id)
  reward.campaign = event.params.campaign
  reward.token = event.params.token
  reward.user = event.params.user
  reward.amount = event.params.amount
  reward.timestamp = event.block.timestamp
  reward.save()

  let market = Market.load(VAULT_ID)
  if (!market) return

  let rewardTokenDecimals = 18
  let rewardAmount = event.params.amount.toBigDecimal().div(BigDecimal.fromString("1e" + rewardTokenDecimals.toString()))

  let oldReward = market.rewardAPR7d
  if (!oldReward) oldReward = BigDecimal.zero()
  let updated = oldReward.plus(rewardAmount.div(BigDecimal.fromString(SECONDS_IN_7DAYS.toString())))
  market.rewardAPR7d = updated
  market.save()
  log.info("\u2705 RewardDistributed stored for {} with reward amount {}", [campaign, rewardAmount.toString()])
}