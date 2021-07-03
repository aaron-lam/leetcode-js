const wordPattern = (pattern, s) => {
  const mapPattern = new Map();
  const mapS = new Map();
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < words.length; i++) {
    const curPattern = pattern[i];
    const curWord = words[i];
    if (!mapPattern.has(curPattern) && !mapS.has(curWord)) {
      mapPattern.set(curPattern, curWord);
      mapS.set(curWord, curPattern);
      continue;
    }
    if (mapPattern.get(curPattern) !== curWord || mapS.get(curWord) !== curPattern) {
      return false;
    }
  }
  return true;
};
