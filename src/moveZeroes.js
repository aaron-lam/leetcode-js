const moveZeroes = (nums) => {
  if (!nums || !nums.length) {
    return nums;
  }
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i += 1;
    }
  }
  for (let k = i; k < nums.length; k++) {
    nums[k] = 0;
  }
  return nums;
};
