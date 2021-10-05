const findMiddleIndex = (nums) => {
  let sum = nums.reduce((acc, val) => acc + val);
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    if (cur === sum) {
      return i;
    }
    sum -= nums[i];
  }
  return -1;
};
