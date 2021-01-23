const repeatedNTimes = (A) => {
  if (!A || A.length < 2) {
    return null;
  }
  for (let i = 2; i < A.length; i++) {
    if (A[i] === A[i - 1] || A[i] === A[i - 2]) {
      return A[i];
    }
  }
  return A[0];
};
