const firstMissingPositive = (nums) => {
  const n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
      const temp = nums[i] - 1;
      [nums[i], nums[temp]] = [nums[temp], nums[i]];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return n + 1;
};
