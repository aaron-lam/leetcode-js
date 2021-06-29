const lengthOfLastWord = (s) => {
  if (s == null || s.length === 0) {
    return 0;
  }
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") {
    i -= 1;
  }
  if (i < 0) {
    return 0;
  }
  let res = 0;
  while (i >= 0 && s[i] !== " ") {
    res += 1;
    i -= 1;
  }
  return res;
};
