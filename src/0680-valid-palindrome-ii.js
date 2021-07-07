const validPalindrome = (s) => isPalindrome(s, 0, s.length - 1, false);

const isPalindrome = (s, start, end, isDeleted) => {
  while (start < end) {
    if (s[start] === s[end]) {
      start += 1;
      end -= 1;
    } else {
      if (isDeleted) {
        return false;
      }
      return isPalindrome(s, start + 1, end, true) || isPalindrome(s, start, end - 1, true);
    }
  }
  return true;
};
