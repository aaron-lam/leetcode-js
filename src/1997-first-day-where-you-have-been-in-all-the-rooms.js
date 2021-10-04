const firstDayBeenInAllRooms = (nextVisit) => {
  const n = nextVisit.length;
  const m = 1000000007;
  const dp = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    dp[i] = (2 * dp[i - 1] - dp[nextVisit[i - 1]] + 2) % m;
  }
  return dp[n - 1] < 0 ? dp[n - 1] + m : dp[n - 1];
};
