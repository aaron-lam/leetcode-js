const isPalindrome = (s) => {
  if (!s || !s.length) {
    return true;
  }
  s = s.replace(/\W+/g, "").toLowerCase();
  let start = 0, end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
