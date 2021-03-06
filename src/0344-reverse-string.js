const reverseString = (s) => {
  if (!s || !s.length) {
    return [];
  }
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start += 1;
    end -= 1;
  }
  return s;
};
