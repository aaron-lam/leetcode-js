const wordBreak = (s, wordDict) => {
  const dict = new Set(wordDict);
  const map = new Map();

  const backtrack = (s) => {
    if (map.has(s)) {
      return map.get(s);
    }
    if (dict.has(s)) {
      map.set(s, true);
      return true;
    }
    for (let i = 1; i < s.length; i++) {
      if (dict.has(s.substring(i)) && backtrack(s.substring(0, i))) {
        map.set(s, true);
        return true;
      }
    }
    map.set(s, false);
    return false;
  };

  return backtrack(s);
};
