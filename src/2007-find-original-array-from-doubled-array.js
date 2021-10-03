const findOriginalArray = (changed) => {
  const n = changed.length;
  let i = 0;
  if (n % 2 === 1) {
    return [];
  }
  const map = new Map();
  const res = [];
  for (const num of changed) {
    map.set(num, (map.get(num, 0) ?? 0) + 1);
  }
  const sortedNums = [...map.keys()].sort((a, b) => a - b);
  for (const num of sortedNums) {
    if (map.get(num) > (map.get(num * 2) ?? 0)) {
      return [];
    }
    for (let i = 0; i < map.get(num); i++) {
      res.push(num);
      map.set(num * 2, map.get(num * 2) - 1);
    }
  }
  return res;
};
