// Solution 1: BFS
const ladderLength = (beginWord, endWord, wordList) => {
  const visited = new Set();
  const wordSet = new Set(wordList);
  const q = [beginWord];
  let res = 1;
  while (q.length > 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const word = q.shift();
      if (word === endWord) {
        return res;
      }
      for (let i = 0; i < word.length; i++) {
        const wordArr = word.split("");
        for (let c = 0; c < 26; c++) {
          const originalChar = wordArr[i];
          const newChar = String.fromCharCode(97 + c);
          if (originalChar === newChar) {
            continue;
          }
          wordArr[i] = newChar;
          const nextWord = wordArr.join("");
          if (!visited.has(nextWord) && wordSet.has(nextWord)) {
            visited.add(nextWord);
            q.push(nextWord);
          }
          wordArr[i] = originalChar;
        }
      }
    }
    res += 1;
  }
  return 0;
};

const ladderLength = (beginWord, endWord, wordList) => {
  const dict = new Set(wordList);
  if (!dict.has(endWord)) {
    return 0;
  }
  let beginSet = new Set();
  let endSet = new Set();
  let len = 1;
  const visited = new Set();
  beginSet.add(beginWord);
  endSet.add(endWord);
  while (beginSet.size && endSet.size) {
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet];
    }
    let temp = new Set();
    for (const word of beginSet) {
      const splitWord = word.split("");
      for (let i = 0; i < splitWord.length; i++) {
        for (let c = 0; c < 26; c++) {
          splitWord[i] = String.fromCharCode(97 + c);
          const target = splitWord.join("");
          if (endSet.has(target)) {
            return len + 1;
          }
          if (!visited.has(target) && dict.has(target)) {
            temp.add(target);
            visited.add(target);
          }
          splitWord[i] = word[i];
        }
      }
    }
    beginSet = temp;
    len += 1;
  }
  return 0;
};
