const findMissingRanges = (nums, lower, upper) => {
  const res = [];
  if (nums == null || nums.length === 0) {
    res.push(formRange(lower, upper));
    return res;
  }
  if (nums[0] > lower) {
    res.push(formRange(lower, nums[0] - 1));
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      res.push(formRange(nums[i] + 1, nums[i + 1] - 1));
    }
  }
  if (nums[nums.length - 1] < upper) {
    res.push(formRange(nums[nums.length - 1] + 1, upper));
  }
  return res;
};

const formRange = (start, end) => start === end ? start.toString() : (start + "->" + end);
