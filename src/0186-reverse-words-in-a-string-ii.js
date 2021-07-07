const reverse = (s, start, end) => {
  while (start < end) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start += 1;
    end -= 1;
  }
};

const reverseWords = (s) => {
  reverse(s, 0, s.length - 1);
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      reverse(s, start, i - 1);
      start = i + 1;
    }
  }
  reverse(s, start, s.length - 1);
};
