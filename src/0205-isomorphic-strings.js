const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const mapS = new Map();
  const mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mapS.get(s[i]) !== mapT.get(t[i])) {
      return false;
    }
    mapS.set(s[i], i);
    mapT.set(t[i], i);
  }
  return true;
};
