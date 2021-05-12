const findKthPositive = (arr, k) => {
  if (arr == null || arr.length === 0 || k < 1) {
    return null;
  }
  const set = new Set([...arr]);
  const range = arr.length + k;
  for (let i = 1; i <= range; i++) {
    if (!set.has(i)) {
      k -= 1;
    }
    if (k === 0) {
      return i;
    }
  }
  return null;
};
