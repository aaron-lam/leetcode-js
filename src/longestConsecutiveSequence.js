const longestConsecutive = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  let res = 0;
  const map = {};
  for (const n of nums) {
    if (!(n in map)) {
      const left = n - 1 in map ? map[n - 1] : 0;
      const right = n + 1 in map ? map[n + 1] : 0;
      const sum = left + right + 1;
      map[n] = sum;
      res = Math.max(res, sum);
      map[n - left] = sum;
      map[n + right] = sum;
    }
  }
  return res;
};
