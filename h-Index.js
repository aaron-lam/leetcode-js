const hIndex = (citations) => {
  if (!citations || !citations.length) {
    return 0;
  }
  const n = citations.length;
  let buckets = new Array(n + 1).fill(0);
  for (const c of citations) {
    (c >= n) ? buckets[n] += 1 : buckets[c] += 1;
  }
  let count = 0;
  for (let i = n; i >= 0; i--) {
    count += buckets[i];
    if (count >= i) {
      return i;
    }
  }
  return 0;
};
