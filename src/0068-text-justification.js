const fullJustify = (words, maxWidth) => {
  const res = [];
  let start = 0;
  while (start < words.length) {
    const end = findEnd(start, words, maxWidth);
    res.push(justify(start, end, words, maxWidth));
    start = end + 1;
  }
  return res;
};

const findEnd = (start, words, maxWidth) => {
  let end = start;
  let sum = words[end].length;
  end += 1;
  while (end < words.length && sum + 1 + words[end].length <= maxWidth) {
    sum += 1 + words[end].length;
    end += 1;
  }
  return end - 1;
};

const justify = (start, end, words, maxWidth) => {
  if (end - start === 0) {
    return padResult(words[start], maxWidth);
  }
  const isLastLine = end === words.length - 1;
  const numWordsInLine = end - start;
  const totalSpaces = maxWidth - wordsLength(start, end, words);
  const spacesAverage = isLastLine ? " " : " ".repeat(totalSpaces / numWordsInLine);
  let spacesRemainder = isLastLine ? 0 : totalSpaces % numWordsInLine;
  const res = [];
  for (let i = start; i <= end; i++) {
    res.push(words[i]);
    res.push(spacesAverage);
    res.push(spacesRemainder > 0 ? " " : "");
    spacesRemainder -= 1;
  }
  return padResult(res.join("").trim(), maxWidth);
};

const padResult = (res, maxWidth) => res + " ".repeat(maxWidth - res.length);

const wordsLength = (start, end, words) => {
  let res = 0;
  for (let i = start; i <= end; i++) {
    res += words[i].length;
  }
  return res;
};
