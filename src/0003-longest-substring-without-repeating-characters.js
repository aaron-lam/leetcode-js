// Solution 1: window substring
const lengthOfLongestSubstring = (s) => {
  const map = new Map();
  let start = 0;
  let res = 0;
  for (let end = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) ?? 0) + 1);
    while (map.get(s[end]) > 1) {
      map.set(s[start], map.get(s[start]) - 1);
      start += 1;
    }
    res = Math.max(res, end - start + 1);
  }
  return res;
};

// Solution 2: using Array.reduce()
const lengthOfLongestSubstring = (s) => {
  if (s == null || s.length === 0) {
    return 0;
  }
  let start = 0;
  const map = new Map();
  return [...s].reduce((maxLen, c, i) => {
    if (map.has(c)) {
      start = Math.max(start, map.get(c) + 1);
    }
    map.set(c, i);
    return Math.max(maxLen, i - start + 1);
  }, 0);
};
