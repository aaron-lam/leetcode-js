const minDominoRotations = (A, B) => {
  if (!A || !B) {
    return -1;
  }
  const aSwapB = Math.min(getMinSwap(A[0], A, B), getMinSwap(A[0], B, A));
  const bSwapA = Math.min(getMinSwap(B[0], A, B), getMinSwap(B[0], B, A));
  const res = Math.min(aSwapB, bSwapA);
  return (res === Number.MAX_VALUE) ? -1 : res;
};

const getMinSwap = (target, A, B) => {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== target) {
      if (B[i] !== target) {
        return Number.MAX_VALUE;
      }
      count += 1;
    }
  }
  return count;
};
