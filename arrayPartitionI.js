const arrayPairSum = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  let res = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    res += nums[i];
  }
  return res;
};
