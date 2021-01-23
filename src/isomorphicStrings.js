const isIsomorphic = (s, t) => {
  if (!s || !t) {
    return !s && !t;
  }
  if (s.length !== t.length) {
    return false;
  }
  const m1 = new Array(256).fill(-1);
  const m2 = new Array(256).fill(-1);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (m1[s[i]] !== m2[t[i]]) {
      return false;
    }
    m1[s[i]] = i;
    m2[t[i]] = i;
  }
  return true;
};
