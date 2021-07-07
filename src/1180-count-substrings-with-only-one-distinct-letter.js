const countLetters = (word) => {
  if (word == null || word.length === 0) {
    return 0;
  }
  let res = 0,
    start = 0,
    end = 0;
  while (end < word.length) {
    if (word.charAt(end) === word.charAt(start)) {
      res += end - start + 1;
      end += 1;
    } else {
      start = end;
    }
  }
  return res;
};
