const groupAnagrams = (strs) => {
  const map = new Map();
  for (const s of strs) {
    const sortedS = s.split("").sort().join("");
    if (map.has(sortedS)) {
      map.get(sortedS).push(s);
    } else {
      map.set(sortedS, [s]);
    }
  }
  return Array.from(map.entries()).map((e) => e[1]);
};
