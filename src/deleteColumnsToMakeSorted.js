const minDeletionSize = (A) => {
  if (!A || !A.length) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (j && A[j][i] < A[j - 1][i]) {
        res += 1;
        break;
      }
    }
  }
  return res;
};
