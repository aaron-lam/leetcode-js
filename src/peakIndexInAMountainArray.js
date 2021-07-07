const peakIndexInMountainArray = (A) => {
  if (!A || !A.length) {
    return -1;
  }
  let start = 0,
    end = A.length;
  while (start <= end) {
    const mid = Math.trunc((end - start) / 2) + start;
    if (mid && A[mid] < A[mid - 1]) {
      end = mid - 1;
    } else if (mid < A.length - 1 && A[mid] < A[mid + 1]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
