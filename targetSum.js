const findTargetSumWays = (nums, s) => {
  if (!nums || !nums.length) {
    return 0;
  }
  const sum = nums.reduce((sum, val) => sum + val);
  if (sum < s || (s + sum) % 2) {
    return 0;
  }
  const target = (s + sum) / 2;
  const n = nums.length;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let t = target; t >= nums[i]; t--) {
      dp[t] += dp[t - nums[i]];
    }
  }
  return dp[target];
};
