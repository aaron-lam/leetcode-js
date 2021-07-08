const lengthOfLongestSubstringTwoDistinct = (s) => {
  const map = new Map();
  let start = 0;
  let res = 0;
  let counter = 0;
  for (let end = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) ?? 0) + 1);
    if (map.get(s[end]) === 1) {
      counter += 1;
    }
    while (counter > 2) {
      map.set(s[start], (map.get(s[start]) - 1));
      if (map.get(s[start]) === 0) {
        counter -= 1;
      }
      start += 1;
    }
    res = Math.max(res, end - start + 1);
  }
  return res;
};
