const sortedSquares = (A) => {
  if (!A || !A.length) {
    return A;
  }
  const n = A.length;
  const res = new Array(n);
  let start = 0, end = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(A[start]) > Math.abs(A[end])) {
      res[i] = A[start] * A[start];
      start += 1;
    } else {
      res[i] = A[end] * A[end];
      end -= 1;
    }
  }
  return res;
};
