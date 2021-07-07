function shortestDistance(words, word1, word2) {
  let idx = -1,
    res = Number.POSITIVE_INFINITY;
  for (let i = 0; i < words.length; i++) {
    if (words[i] == word1 || words[i] == word2) {
      if (idx != -1 && words[idx] != words[i]) {
        res = Math.min(res, i - idx);
      }
      idx = i;
    }
  }
  return res;
}

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
