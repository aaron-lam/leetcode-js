// Solution 1: window substring
const updateMapValue = (map, key, value) => map.set(key, (map.get(key) ?? 0) + value);

const incrementMapValue = (map, key) => updateMapValue(map, key, 1);

const decrementMapValue = (map, key) => updateMapValue(map, key, -1);

const lengthOfLongestSubstring = (s) => {
  if (s == null || s.length === 0) {
    return 0;
  }
  let start = 0, maxLen = 0;
  const freqCounts = new Map();
  for (let end = 0; end < s.length; end++) {
    incrementMapValue(freqCounts, s.charAt(end));
    while (freqCounts.get(s.charAt(end)) > 1) {
      decrementMapValue(freqCounts, s.charAt(start));
      start += 1;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

// Solution 2: using Array.reduce()
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
