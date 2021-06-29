const canConstruct = (ransomNote, magazine) => {
  const map = new Map();
  for (const c of ransomNote.split("")) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  for (const c of magazine.split("")) {
    map.set(c, (map.get(c) ?? 0) - 1);
  }
  for (const freq of map.values()) {
    if (freq > 0) {
      return false;
    }
  }
  return true;
};
