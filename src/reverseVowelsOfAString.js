const reverseVowels = (s) => {
  if (!s || !s.length) {
    return "";
  }
  s = s.split("");
  let start = 0, end = s.length - 1;
  while (start < end) {
    while (start < end && !isVowel(s[start])) {
      start += 1;
    }
    while (start < end && !isVowel(s[end])) {
      end -= 1;
    }
    [s[start], s[end]] = [s[end], s[start]];
    start += 1;
    end -= 1;
  }
  return s.join("");
};

const isVowel = (c) => ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
