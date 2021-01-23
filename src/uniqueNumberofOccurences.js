const uniqueOccurrences = (arr) => {
  if (!arr || !arr.length) {
    return true;
  }
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const set = new Set();
  for (const entry of map.entries()) {
    console.log(entry);
    if (set.has(entry[1])) {
      return false;
    }
    set.add(entry[1]);
  }
  return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));
