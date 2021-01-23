const titleToNumber = (s) => {
  if (!s || !s.length) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res = res * 26 + (s[i].charCodeAt(0) - 64);
  }
  return res;
};
