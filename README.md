# Subgraph Validation for Euler Finance Pool Metrics

This subgraph helps verify that pool metrics shown on the [Euler Finance frontend](https://app.euler.finance/) are correctly calculated from on-chain data.

## 🔧 How to Use

1. **Set Merkl Reward APRs**  
   Define both **supply** and **borrow** reward APRs (sum of all [active Merkl campaigns](https://app.merkl.xyz/)) in `mapping.ts`:
   ```ts
   const STATIC_REWARD_SUPPLY_APR = BigDecimal.fromString("0.0365") // 3.65%
   const STATIC_REWARD_BORROW_APR = BigDecimal.fromString("0.0032") // 0.32%
   ```
This is setup this way because I wanted to make everything work with just subgraph but it does not allow real-time API updates. For automated updates, we can perhaps add script to fetch from Merkl API and auto-deploy to subgraph.

2. **Set Collateral Address**  
   Make sure the correct collateral address is used:
   ```ts
   const COLLATERAL_ADDRESS = "0xB38D431e932fEa77d1dF0AE0dFE4400c97e597B8" // scUSD
   ```

3. **Edit Vault ID (Optional)**  
   Update `VAULT_ID` to match your pool name:
   ```ts
   const VAULT_ID = "USDCe-scUSD"
   ```

4. **Build & Deploy Subgraph**  
   Run the following commands to build and deploy:
   ```bash
   graph codegen && graph build
   graph deploy euler-usdce-scusd
   ```

5. **Query the Subgraph**  
   Use the following query to check key metrics:
   ```graphql
   {
     market(id: "USDCe-scUSD") {
       id
       availableLiquidity
       maxROE
       maxMultiplier
       liquidationLTV
       supplyAPY
       borrowAPY
     }
   }
   ```
## Example (USDC.e/scUSD)
Subgraph [here](https://thegraph.com/explorer/subgraphs/6v4FYePDBWG5rWEd4KFpVWKAeKA7fPSLdSCQA6FrqWj9?view=Query&chain=arbitrum-one).
### Euler Frontend vs Subgraph Comparison

| Metric              | Euler Frontend         | Subgraph Output        |
|---------------------|------------------------|------------------------|
| Available Liquidity | $1.70M                 | $1.697M                |
| Supply APY          | 8.27%                  | 10.07%                 |
| Borrow APY          | 8.03%                  | 7.15%                  |
| Max ROE             | 10.55%                 | 41.44%                 |
| Max Multiplier      | 10.51x                 | 11.76x                 |
| LLTV                | 91.50%                 | 91.50%                 |

---

## Key Findings
These are the calculations I eventually came up with while testing to replicate the values on front-end.

| Metric              | Incorrect Before                          | Fix Made                                                                |
|---------------------|-------------------------------------------|-------------------------------------------------------------------------|
| Available Liquidity | ~3.1M (from `totalAssets - borrows - fees`) | Now uses `vault.cash()` from correct vault address                     |
| Supply APY          | Varied (inconsistent)                     | Fixed unit conversion & included manually-defined Merkl rewards        |
| Borrow APY          | Slightly off                              | Corrected ray unit decoding & subtracted borrow-side rewards           |
| Max ROE             | Unrealistically high (e.g. 45%)           | Applied proper ROE formula & formatted result as percentage            |
| LLTV                | Accurate                                  | Pulled from `vault.LTVFull()` with proper % formatting                 |

---

