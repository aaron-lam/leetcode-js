const subarraysDivByK = (A, K) => {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let res = 0;
  for (const num of A) {
    sum += num;
    sum %= K;
    if (sum < 0) {
      sum += K;
    }
    res += map.get(sum) ?? 0;
    map.set(sum, (map.get(sum) ?? 0) + 1);
  }
  return res;
};
