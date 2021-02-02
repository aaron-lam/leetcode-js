const longestPalindrome = (s) => {

  const updateLongestPalindromeLength = (start, end) => {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      start -= 1;
      end += 1;
    }
    if (len < end - start - 1) {
      len = end - start - 1;
      startIndex = start + 1;
    }
  };

  if (s == null || s.length === 0) {
    return "";
  }
  let startIndex = 0;
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    updateLongestPalindromeLength(i, i);
    updateLongestPalindromeLength(i, i + 1);
  }
  return s.substring(startIndex, startIndex + len);
};
