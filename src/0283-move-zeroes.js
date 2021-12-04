const moveZeroes = (nums) => {
  let resIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[resIdx] = nums[i];
      resIdx += 1;
    }
  }
  while (resIdx < nums.length) {
    nums[resIdx] = 0;
    resIdx += 1;
  }
  return nums;
};
