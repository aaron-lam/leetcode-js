const majorityElement = (nums) => {
  let res = undefined;
  let count = 0;
  for (const num of nums) {
    if (count == 0) {
      count += 1;
      res = num;
    } else if (res == num) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return res;
};
