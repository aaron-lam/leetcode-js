const removeDuplicates = (nums) => {
  if (nums.length < 3) {
    return nums.length;
  }
  let i = 2;
  for (let j = 2; j < nums.length; j++) {
    if (nums[j] != nums[i - 2]) {
      nums[i] = nums[j];
      i += 1;
    }
  }
  return i;
};
