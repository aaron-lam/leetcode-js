const longestPalindrome = (s) => {
  if (!s || !s.length) {
    return "";
  }
  let startIdx = 0;
  let len = 0;
  const extendPalindrome = (start, end) => {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start -= 1;
      end += 1;
    }
    if (len < end - start - 1) {
      len = end - start - 1;
      startIdx = start + 1;
    }
  };
  for (let i = 0; i < s.length; i++) {
    extendPalindrome(i, i);
    extendPalindrome(i, i + 1);
  }
  return s.substring(startIdx, startIdx + len);
};
