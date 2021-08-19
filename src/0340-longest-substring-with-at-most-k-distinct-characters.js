const lengthOfLongestSubstringKDistinct = (s, k) => {
  const map = new Map();
  let start = 0;
  let res = 0;
  for (let end = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) ?? 0) + 1);
    while (map.size > k) {
      map.set(s[start], map.get(s[start]) - 1);
      if (map.get(s[start]) === 0) {
        map.delete(s[start]);
      }
      start += 1;
    }
    res = Math.max(res, end - start + 1);
  }
  return res;
};
