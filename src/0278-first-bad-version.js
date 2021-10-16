const solution = (isBadVersion) => {
  return (n) => {
    let start = 0;
    let end = n;
    let res = Infinity;
    while (start <= end) {
      const mid = Math.floor((end - start) / 2) + start;
      if (!isBadVersion(mid)) {
        start = mid + 1;
      } else {
        end = mid - 1;
        res = Math.min(res, mid);
      }
    }
    return res;
  };
};
