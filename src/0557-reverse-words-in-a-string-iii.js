const reverseWords = (s) => {
  let start = 0;
  let end = 0;
  const res = s.split("");
  while (end < res.length) {
    while (end < res.length && res[end] !== " ") {
      end += 1;
    }
    reverse(res, start, end - 1);
    while (end < res.length && res[end] === " ") {
      end += 1;
    }
    start = end;
  }
  return res.join("");
};

const reverse = (s, start, end) => {
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start += 1;
    end -= 1;
  }
  return s;
};
