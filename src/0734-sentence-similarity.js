const buildPairsMap = (similarPairs) => {
  const map = new Map();
  for (const [word1, word2] of similarPairs) {
    if (!map.has(word1)) {
      map.set(word1, new Set());
    }
    if (!map.has(word2)) {
      map.set(word2, new Set());
    }
    map.get(word1).add(word2);
    map.get(word2).add(word1);
  }
  return map;
}

const areSentencesSimilar = (sentence1, sentence2, similarPairs) => {
  if (sentence1 == null || sentence2 == null) {
    return sentence1 == null && sentence2 == null;
  }
  if (sentence1.length !== sentence2.length) {
    return false;
  }
  const map = buildPairsMap(similarPairs);
  for (let i = 0; i < sentence1.length; i++) {
    const word1 = sentence1[i];
    const word2 = sentence2[i];
    if (word1 !== word2 && (!map.has(word1) || !map.get(word1).has(word2))) {
      return false;
    }
  }
  return true;
};
