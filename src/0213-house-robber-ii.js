const rob = (nums) => {
  if (nums.length < 2) {
    return nums[0];
  }
  return Math.max(_rob(nums.slice(1)), _rob(nums.slice(0, nums.length - 1)));
};

const _rob = (nums) => {
  if (nums.length < 2) {
    return nums[0];
  }
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
