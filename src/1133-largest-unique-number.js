const largestUniqueNumber = (A) => {
  if (A == null || A.length === 0) {
    return -1;
  }
  const map = new Map();
  let max = -1;
  for (const num of A) {
    map.set(num, (map.has(num) ? map.get(num) : 0) + 1);
  }
  for (const num of map.keys()) {
    if (num > max && map.get(num) === 1) {
      max = num;
    }
  }
  return max;
};
