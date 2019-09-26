const canPartition = (nums) => {
  if (!nums || !nums.length) {
    return true;
  }
  let sum = nums.reduce((sum, val) => sum + val);
  if (sum % 2) {
    return false;
  }
  sum /= 2;
  const n = nums.length;
  const dp = new Array(sum + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < n; i++) {
    for (let s = sum; s > 0; s--) {ƒ
      if (s >= nums[i]) {
        dp[s] = dp[s] || dp[s - nums[i]];
      }
    }
  }
  return dp[sum];
};
