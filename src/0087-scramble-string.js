const isAnagram = (s1, s2) => {
  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) ?? 0) + 1);
    map.set(s2[i], (map.get(s2[i]) ?? 0) - 1);
  }
  for (const val of map.values()) {
    if (val !== 0) {
      return false;
    }
  }
  return true;
};

const isScramble = (s1, s2) => {
  return isScrambleRecur(s1, s2, new Map());
};

const isScrambleRecur = (s1, s2, map) => {
  const key = s1 + s2;
  if (map.has(key)) {
    return map.get(key);
  }
  if (s1 === s2) {
    map.set(key, true);
    return true;
  }
  if (!isAnagram(s1, s2)) {
    map.set(key, false);
    return false;
  }
  const n = s1.length;
  for (let i = 1; i < n; i++) {
    if (
      isScrambleRecur(s1.substring(0, i), s2.substring(0, i), map) &&
      isScrambleRecur(s1.substring(i), s2.substring(i), map)
    ) {
      map.set(key, true);
      return true;
    }
    if (
      isScrambleRecur(s1.substring(0, i), s2.substring(n - i), map) &&
      isScrambleRecur(s1.substring(i), s2.substring(0, n - i), map)
    ) {
      map.set(key, true);
      return true;
    }
  }
  map.set(key, false);
  return false;
};
