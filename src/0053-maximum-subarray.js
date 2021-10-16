const maxSubArray = (nums) => {
  let curSum = Number.NEGATIVE_INFINITY;
  let res = Number.NEGATIVE_INFINITY;
  for (const num of nums) {
    curSum = Math.max(curSum + num, num);
    res = Math.max(res, curSum);
  }
  return res;
};
