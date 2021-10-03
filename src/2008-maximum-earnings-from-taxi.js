const maxTaxiEarnings = (n, rides) => {
  rides.sort((a, b) => a[0] - b[0]);
  const dp = new Array(n + 1).fill(0);
  const endAt = new Map();
  for (const [start, end, tip] of rides) {
    if (!endAt.has(end)) {
      endAt.set(end, []);
    }
    endAt.get(end).push([start, end - start + tip]);
  }
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1];
    for (const [start, earn] of [...(endAt.get(i) ?? [])]) {
      dp[i] = Math.max(dp[i], earn + dp[start]);
    }
  }
  return dp[n];
};
