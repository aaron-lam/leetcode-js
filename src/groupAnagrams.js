const groupAnagrams = (strs) => {
  if (!strs || !strs.length) {
    return [];
  }
  const map = {};
  for (const str of strs) {
    const key = [...str].sort().join("");
    if (!(key in map)) {
      map[key] = [];
    }
    map[key].push(str);
  }
  return Object.values(map);
};
