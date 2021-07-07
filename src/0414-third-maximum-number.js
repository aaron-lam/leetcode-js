const thirdMax = (nums) => {
  if (nums == null || nums.length === 0) {
    return 0;
  }
  let max = null;
  let secondMax = null;
  let thirdMax = null;
  for (const num of nums) {
    if (num === max || num === secondMax || num === thirdMax) {
      continue;
    }
    if (max == null || num > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = num;
    } else if (secondMax == null || num > secondMax) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (thirdMax == null || num > thirdMax) {
      thirdMax = num;
    }
  }
  return thirdMax ?? max;
};
