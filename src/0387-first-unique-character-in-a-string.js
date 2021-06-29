const firstUniqChar = (s) => {
  if (s == null || s.length === 0) {
    return -1;
  }
  const map = new Map();
  for (const c of s.split("")) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
