const pivotIndex = (nums) => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    right += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if (left === right) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};
