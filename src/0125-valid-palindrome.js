const isAlphanumeric = (c) => c.match(/^[0-9a-zA-Z]+$/);

const isPalindrome = (s) => {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    while (start < end && !isAlphanumeric(s[start])) {
      start += 1;
    }
    while (start < end && !isAlphanumeric(s[end])) {
      end -= 1;
    }
    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
