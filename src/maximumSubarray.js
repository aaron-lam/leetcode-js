const maxSubArray = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  let dp = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    res = Math.max(res, dp);
  }
  return res;
};
