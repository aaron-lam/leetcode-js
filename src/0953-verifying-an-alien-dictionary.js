const toAlphabetIndex = (c) => c.charCodeAt(0) - 97;

const isAlienSorted = (words, order) => {
  const rank = new Array(26).fill(0);
  for (let i = 0; i < order.length; i++) {
    rank[toAlphabetIndex(order[i])] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (isGreater(words[i], words[i + 1], rank)) {
      return false;
    }
  }
  return true;
};

const isGreater = (s1, s2, rank) => {
  const m = s1.length;
  const n = s2.length;
  for (let i = 0; i < Math.min(m, n); i++) {
    if (s1[i] !== s2[i]) {
      return rank[toAlphabetIndex(s1[i])] > rank[toAlphabetIndex(s2[i])];
    }
  }
  return m > n;
}
