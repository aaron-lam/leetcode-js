const countSubstrings = (s) => {
  if (s == null || s.length === 0) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += extendPalindrome(s, i, i);
    res += extendPalindrome(s, i, i + 1);
  }
  return res;
};

const extendPalindrome = (s, start, end) => {
  let length = 0;
  while (start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
    start -= 1;
    end += 1;
    length += 1;
  }
  return length;
};
