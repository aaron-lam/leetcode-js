const toAlphabetIndex = (c) => c.charCodeAt(0) - 97;

const checkInclusion = (s1, s2) => {
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    counts[toAlphabetIndex(s1[i])] += 1;
  }
  let start = 0;
  for (let end = 0; end < s2.length; end++) {
    counts[toAlphabetIndex(s2[end])] -= 1;
    while (counts[toAlphabetIndex(s2[end])] < 0) {
      counts[toAlphabetIndex(s2[start])] += 1;
      start += 1;
    }
    if (end - start + 1 === s1.length) {
      return true;
    }
  }
  return false;
};
