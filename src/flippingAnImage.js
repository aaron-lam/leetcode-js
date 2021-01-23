const flipAndInvertImage = (A) => {
  if (!A || !A.length || !A[0].length) {
    return A;
  }
  for (let i = 0; i < A.length; i++) {
    let start = 0, end = A[i].length - 1;
    while (start <= end) {
      if (A[i][start] === A[i][end]) {
        A[i][start] = 1 - A[i][start];
        A[i][end] = A[i][start];
      }
      start += 1;
      end -= 1;
    }
  }
  return A;
};
