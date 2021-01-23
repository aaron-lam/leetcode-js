const wordPattern = (pattern, str) => {
  if (!pattern || !str) {
    return !pattern && !str;
  }
  const words = str.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  const m1 = new Array(256).fill(-1);
  const m2 = new Array(256).fill(-1);
  for (let i = 0; i < pattern.length; i++) {
    if (m1[pattern[i]] !== m2[words[i]]) {
      return false;
    }
    m1[pattern[i]] = i;
    m2[words[i]] = i;
  }
  return true;
};
