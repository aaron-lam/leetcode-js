const lengthOfLongestSubstring = (s) => {
  let maxLen = 0;
  const map = new Map();
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    const c = s[end];
    if (map.has(c)) {
      start = Math.max(start, map.get(c) + 1);
    }
    map.set(c, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

// using Array.reduce()
const lengthOfLongestSubstring2 = (s) => {
  if (!s || s.length === 0) {
    return 0;
  }
  let start = 0;
  const map = {};
  return s.split('').reduce((maxLen, c, i) => {
    if (c in map) {
      start = Math.max(start, map[c] + 1);
    }
    map[c] = i;
    return Math.max(maxLen, i - start + 1);
  }, 0);
};
