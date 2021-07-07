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

const isGreater = (word1, word2, rank) => {
  const m = word1.length;
  const n = word2.length;
  for (let i = 0; i < Math.min(m, n); i++) {
    const rank1 = rank[toAlphabetIndex(word1[i])];
    const rank2 = rank[toAlphabetIndex(word2[i])];
    if (rank1 !== rank2) {
      return rank1 > rank2;
    }
  }
  return m > n;
};
