const minSessions = (tasks, sessionTime) => {
  const n = tasks.length;
  const dp = Array(1 << n).fill(Number.MAX_SAFE_INTEGER);
  const valid = Array(1 << n).fill(false);
  for (let i = 0; i < 1 << n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (1 & (i >> j)) {
        sum += tasks[j];
      }
    }
    valid[i] = sum <= sessionTime;
  }
  dp[0] = 0;
  for (let i = 0; i < 1 << n; i++) {
    for (let j = i; j > 0; j = (j - 1) & i) {
      if (valid[j]) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1);
      }
    }
  }
  return dp[(1 << n) - 1];
};
