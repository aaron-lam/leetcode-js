const hIndex = (citations) => {
  if (!citations || !citations.length) {
    return 0;
  }
  let n = citations.length, left = 0, right = n - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (citations[mid] === (n - mid)) {
      return citations[mid];
    } else if (citations[mid] > (n - mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return n - (right + 1);
};
