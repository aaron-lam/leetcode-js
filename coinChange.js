const coinChange = (coins, amount) => {
  const n = coins.length;
  const dp = new Array(n).fill(0).map(() => new Array(amount + 1).fill(Number.MAX_VALUE));
  for (let i = 0; i < n; i++) {
    dp[i][0] = 0;
  }
  for (let i = 0; i < n; i++) {
    for (let t = 1; t <= amount; t++) {
      if (i > 0) {
        dp[i][t] = dp[i - 1][t];
      }
      if (t >= coins[i]) {
        const combination1 = (coins[i] <= t) ? dp[i][t - coins[i]] + 1 : Number.MAX_VALUE;
        const combination2 = (i > 0) ? dp[i - 1][t] : Number.MAX_VALUE;
        dp[i][t] = Math.min(combination1, combination2);
      }
    }
  }
  return dp[n - 1][amount] === Number.MAX_VALUE ? -1 : dp[n - 1][amount];
};
