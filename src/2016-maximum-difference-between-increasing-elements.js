const maximumDifference = (nums) => {
  let res = 0;
  let min = nums[0];
  for (const num of nums) {
    res = Math.max(res, num - min);
    min = Math.min(min, num);
  }
  return res !== 0 ? res : -1;
};
