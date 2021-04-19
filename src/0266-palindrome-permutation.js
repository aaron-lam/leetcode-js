// Solution 1: Hash Map
const canPermutePalindrome = (s) => {
  if (s == null || s.length === 0) {
    return true;
  }
  const map = new Map();
  for (c of s.split("")) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  let hasOddOccurrence = false;
  for (c of map.keys()) {
    if (map.get(c) % 2 !== 0) {
      if (hasOddOccurrence) {
        return false;
      }
      hasOddOccurrence = true;
    }
  }
  return true;
};

// Solution 2: Hash Set
const canPermutePalindrome = (s) => {
  if (s == null || s.length === 0) {
    return true;
  }
  const set = new Set();
  for (c of s.split("")) {
    if (!set.has(c)) {
      set.add(c);
    } else {
      set.delete(c);
    }
  }
  return set.size === 0 || set.size === 1;
};
