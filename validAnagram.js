const isAnagram = (s, t) => {
  if (!s || !t) {
    return !s && !t;
  }
  if (s.length !== t.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]]) ? map[s[i]] + 1 : 1;
    map[t[i]] = (map[t[i]]) ? map[t[i]] - 1 : -1;
  }
  for (const key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
};
