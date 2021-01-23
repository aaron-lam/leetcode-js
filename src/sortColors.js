const sortColors = (nums) => {
  if (!nums || nums.length < 2) {
    return nums;
  }
  let start = 0, end = nums.length - 1;
  let idx = 0;
  while (idx <= end) {
    if (nums[idx] === 0) {
      [nums[idx], nums[start]] = [nums[start], nums[idx]];
      start += 1;
      idx += 1;
    } else if (nums[idx] === 2) {
      [nums[idx], nums[end]] = [nums[end], nums[idx]];
      end -= 1;
    } else {
      idx += 1;
    }
  }
  return nums;
};
