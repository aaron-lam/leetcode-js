const reverseVowels = (s) => {
  const vowels = new Set("aeiouAEIOU".split(""));
  let start = 0;
  let end = s.length - 1;
  const res = s.split("");
  while (start < end) {
    while (start < end && !vowels.has(res[start])) {
      start += 1;
    }
    while (start < end && !vowels.has(res[end])) {
      end -= 1;
    }
    const temp = res[start];
    res[start] = res[end];
    res[end] = temp;
    start += 1;
    end -= 1;
  }
  return res.join("");
};
