const reverseString = (s) => {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start += 1;
    end -= 1;
  }
  return s;
};
