const toGoatLatin = (S) => {
  if (S == null || S.length === 0) {
    return "";
  }
  const words = S.split(" ");
  const vowels = "aeiouAEIOU".split("");
  return words.map((word, index) => {
    if (!vowels.includes(word[0])) {
      const conosant = word[0];
      word = word.slice(1) + conosant;
    }
    word += "ma" + "a".repeat(index + 1);
    return word;
  }).join(" ");
};
