function ladderLength(beginWord, endWord, wordList) {
  let len = 1;
  let q = [beginWord];
  const dict = new Set(wordList);
  const visited = new Set();
  visited.add(beginWord);
  while (q.length) {
    const nextLevel = [];
    for (const word of q) {
      if (word == endWord) {
        return len;
      }
      const splitWord = word.split("");
      for (let i = 0; i < splitWord.length; i++) {
        for (let c = 0; c < 26; c++) {
          splitWord[i] = String.fromCharCode(97 + c);
          const joinWord = splitWord.join("");
          if (!visited.has(joinWord) && dict.has(joinWord)) {
            nextLevel.push(joinWord);
            visited.add(joinWord);
          }
          splitWord[i] = word[i];
        }
      }
    }
    q = nextLevel;
    len += 1;
  }
  return 0;
}

const ladderLength = (beginWord, endWord, wordList) => {
  const dict = new Set(wordList);
  if(!dict.has(endWord)) {
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
