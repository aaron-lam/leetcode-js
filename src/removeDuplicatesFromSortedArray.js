const removeDuplicates = (nums) => {
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[j - 1]) {
      nums[i] = nums[j];
      i += 1;
    }
  }
  return i;
};
