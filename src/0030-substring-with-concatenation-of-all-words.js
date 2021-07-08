const findSubstring = (s, words) => {
  const map = new Map();
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  const res = [];
  const wordLen = words[0].length;
  for (let i = 0; i <= s.length - words.length * wordLen; i++) {
    const substr = s.substring(i, i + words.length * wordLen);
    if (isConcat(substr, map, wordLen)) {
      res.push(i);
    }
  }
  return res;
};

const isConcat = (substr, map, wordLen) => {
  const map2 = new Map();
  for (let i = 0; i < substr.length; i += wordLen) {
    const word = substr.substring(i, i + wordLen);
    map2.set(word, (map2.get(word) ?? 0) + 1);
  }
  return isMapEqual(map, map2);
}

const isMapEqual = (map1, map2) => {
  if (map1.size !== map2.size) {
    return false;
  }
  for (var [key, val] of map1) {
    const testVal = map2.get(key);
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}
