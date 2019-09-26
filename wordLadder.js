const ladderLength = (beginWord, endWord, wordList) => {
  let len = 1;
  let queue = [beginWord];
  // put wordList into a set for time optimization
  const dict = new Set(wordList);
  // need a set for recording visited word
  const visited = new Set();
  // add beginWord to visited
  visited.add(beginWord);
  while (queue.length) {
    const nextLevel = [];
    for (let word of queue) {
      if (word === endWord) {
        return len;
      }
      const splitWord = word.split("");
      for (let i = 0; i < splitWord.length; i++) {
        for (let c = 0; c < 26; c++) {
          splitWord[i] = String.fromCharCode(97 + c);
          const joinedWord = splitWord.join("");
          if (!visited.has(joinedWord) && dict.has(joinedWord)) {
            nextLevel.push(joinedWord);
            visited.add(joinedWord);
          }
          splitWord[i] = word[i];
        }
      }
    }
    queue = nextLevel;
    len += 1;
  }
  return 0;
};

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
