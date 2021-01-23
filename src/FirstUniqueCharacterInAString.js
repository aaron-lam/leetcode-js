const firstUniqChar = (s) => {
  if (!s || !s.length) {
    return -1;
  }
  const map = {};
  const charArr = s.split("");
  charArr.forEach(c => map[c] = (!map[c]) ? 1 : map[c] + 1);
  for (let i = 0; i < charArr.length; i++) {
    if (map[charArr[i]] === 1) {
      return i;
    }
  }
  return -1;
};
