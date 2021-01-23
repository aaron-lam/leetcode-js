const canConstruct = (ransomNote, magazine) => {
  if (!ransomNote || !ransomNote.length) {
    return true;
  }
  if (!magazine || !magazine.length) {
    return false;
  }
  const map = {};
  magazine.split("").forEach(c => map[c] = (map[c]) ? map[c] + 1 : 1);
  console.log(map);
  for (const note of ransomNote.split("")) {
    if (map[note] === 0 || !(note in map)) {
      return false;
    }
    map[note] -= 1;
  }
  return true;
};
