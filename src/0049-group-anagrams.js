const groupAnagrams = (strs) => {
  const map = new Map();
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }
  return [...map.values()];
};
