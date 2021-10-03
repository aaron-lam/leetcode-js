const countKDifference = (nums, k) => {
  const map = new Map();
  let res = 0;
  for (const num of nums) {
    if (map.has(-k + num)) {
      res += map.get(-k + num);
    }
    if (map.has(k + num)) {
      res += map.get(k + num);
    }
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  return res;
};
