const arrayStringsAreEqual = (word1, word2) => {
  if (word1 == null || word2 == null) {
    return word1 === word2;
  }
  return word1.join("") === word2.join("");
};
