const findMaxLength = (nums) => {
  nums = nums.map((num) => num === 0 ? -1 : num);
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum)) {
      res = Math.max(res, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return res;
};
