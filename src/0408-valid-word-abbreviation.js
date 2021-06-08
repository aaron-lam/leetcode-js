const isNumber = (c) => c >= "0" && c <= "9";

const validWordAbbreviation = (word, abbr) => {
  let i = 0, j = 0;
  while (i < word.length && j < abbr.length) {
    if (word[i] === abbr[j]) {
      i += 1;
      j += 1;
      continue;
    }
    if (!isNumber(abbr[j]) || abbr[j] === "0") {
      return false;
    }
    let start = j;
    while (j < abbr.length && isNumber(abbr[j])) {
      j += 1;
    }
    const num = Number(abbr.substring(start, j));
    i += num;
  }
  return i === word.length && j === abbr.length;
};
