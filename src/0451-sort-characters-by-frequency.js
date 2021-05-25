const frequencySort = (s) => {
  const map = new Map();
  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  const sortedKeys = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a));
  return sortedKeys.map((key) => key.repeat(map.get(key))).join("");
};
