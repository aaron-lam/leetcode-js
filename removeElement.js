// if modify array is allowed
const removeElement = (nums, val) => {
  if (!nums || !nums.length) {
    return 0;
  }
  let i = 0;
  while (i < nums.length) {
    (nums[i] === val) ?
      nums.splice(i, 1) :
      i += 1;
  }
  return nums.length;
};

// if modify array is not allowed
const removeElement = (nums, val) => {
  if (!nums || !nums.length) {
    return 0;
  }
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i += 1;
    }
  }
  return i;
};
