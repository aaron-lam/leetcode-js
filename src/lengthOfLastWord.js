const lengthOfLastWord = (s) => {
  if (!s || !s.length) {
    return 0;
  }
  let len = 0, idx = s.length - 1;
  while (idx >= 0 && s.charAt(idx) === ' ') {
    idx -= 1;
  }
  for (let i = idx; i >= 0 && s.charAt(i) !== ' '; i--) {
    len += 1;
  }
  return len;
};
