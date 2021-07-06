const isOneEditDistance = (s, t) => {
  const n1 = s.length;
  const n2 = t.length;
  if (n2 < n1) {
    return isOneEditDistance(t, s);
  }
  const isSameLen = n1 === n2;
  for (let i = 0; i < n1; i++) {
    if (s[i] !== t[i]) {
      if (isSameLen) {
        return s.substring(i + 1) === t.substring(i + 1);
      }
      return s.substring(i) === t.substring(i + 1);
    }
  }
  return n1 + 1 === n2 || n2 + 1 === n1;
};
