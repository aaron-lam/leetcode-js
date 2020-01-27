function solution(isBadVersion) {

  return function(n) {
    let res = null, start = 0, end = n;
    while (start <= end) {
      const mid = Math.trunc((end - start) / 2) + start;
      if (isBadVersion(mid)) {
        res = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return res;
  }
}
