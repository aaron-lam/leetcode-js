const wordBreak = function (s, wordDict, map = {}) {
  if (map[s] !== undefined) {
    return map.get(s);
  }

  if (!s.length) {
    map[s] = [];
    return [];
  }

  const result = [];
  for (const word of wordDict) {
    if (s.startsWith(word)) {
      const newStr = s.slice(word.length);
      const values = wordBreak(newStr, wordDict, map);
      if (!values.length && newStr.length === 0) {
        result.push(word);
      } else {
        values.forEach((val) => {
          result.push(word + " " + val);
        });
      }
    }
  }

  map[s] = result;
  return result;
};
