// Solution 1: window substring
const lengthOfLongestSubstring = (s) => {
  const set = new Set();
  let res = 0;
  for (let end = 0, start = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start += 1;
    }
    set.add(s[end]);
    res = Math.max(res, end - start + 1);
  }
  return res;
};

// Solution 2: using Array.reduce()
const lengthOfLongestSubstring2 = (s) => {
  if (s == null || s.length === 0) {
    return 0;
  }
  let start = 0;
  const map = {};
  return s.split("").reduce((maxLen, c, i) => {
    if (c in map) {
      start = Math.max(start, map[c] + 1);
    }
    map[c] = i;
    return Math.max(maxLen, i - start + 1);
  }, 0);
};
