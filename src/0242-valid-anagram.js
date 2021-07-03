const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    map.set(t[i], (map.get(t[i]) ?? 0) - 1);
  }
  for (const val of map.values()) {
    if (val !== 0) {
      return false;
    }
  }
  return true;
};
