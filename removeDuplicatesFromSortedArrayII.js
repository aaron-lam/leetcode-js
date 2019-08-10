const removeDuplicates = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i += 1;
    }
  }
  return i;
};
