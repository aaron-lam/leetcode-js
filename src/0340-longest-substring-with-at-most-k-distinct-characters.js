const lengthOfLongestSubstringKDistinct = (s, k) => {
  let res = 0;
  const map = new Map();
  let numOfDistinctChars = 0;
  for (let end = 0, start = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) ?? 0) + 1);
    if (map.get(s[end]) === 1) {
      numOfDistinctChars += 1;
    }
    while (start <= end && numOfDistinctChars > k) {
      map.set(s[start], map.get(s[start]) - 1);
      if (map.get(s[start]) === 0) {
        numOfDistinctChars -= 1;
      }
      start += 1;
    }
    res = Math.max(res, end - start + 1);
  }
  return res;
};
