const minimumDifference = (nums, k) => {
  nums.sort((a, b) => a - b);
  let res = Number.POSITIVE_INFINITY;
  for (let i = k - 1; i < nums.length; i++) {
    res = Math.min(res, nums[i] - nums[i - k + 1]);
  }
  return res;
};
