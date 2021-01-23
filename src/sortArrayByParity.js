const sortArrayByParity = (A) => {
  if (!A || A.length < 2) {
    return A;
  }
  let j = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      const temp = A[j];
      A[j++] = A[i];
      A[i] = temp;
    }
  }
  return A;
};
