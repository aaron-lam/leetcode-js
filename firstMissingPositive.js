const firstMissingPositive = (nums) => {
  if (!nums || !nums.length) {
    return 1;
  }
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      let temp = nums[i] - 1;
      [nums[i], nums[temp]] = [nums[temp], nums[i]];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
};
