const reversePrefix = (word, ch) => {
  const idx = word.indexOf(ch);
  const wordArr = word.split("");
  reverse(wordArr, 0, idx);
  return wordArr.join("");
};

const reverse = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start += 1;
    end -= 1;
  }
};
