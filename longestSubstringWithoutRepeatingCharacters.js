const lengthOfLongestSubstring = (s) => {
  if (!s || s.length === 0) {
    return 0;
  }
  let maxLen = 0, start = 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c in map) {
      start = Math.max(start, map[c] + 1);
    }
    map[c] = i;
    maxLen = Math.max(maxLen, i - start + 1);
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
