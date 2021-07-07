function hIndex(citations) {
  const n = citations.length;
  let start = 0,
    end = n - 1;
  while (start <= end) {
    const mid = Math.trunc((end - start) / 2) + start;
    if (citations[mid] == n - mid) return n - mid;
    else if (citations[mid] > n - mid) end = mid - 1;
    else start = mid + 1;
  }
  return n - start;
}
