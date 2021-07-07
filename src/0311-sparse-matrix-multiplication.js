// Solution 1: Brute force
const multiply = (mat1, mat2) => {
  const res = new Array(mat1.length).fill(0).map(() => new Array(mat2[0].length));
  const m = mat1.length,
    n = mat2[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let k = 0; k < mat1[0].length; k++) {
        sum += mat1[i][k] * mat2[k][j];
      }
      res[i][j] = sum;
    }
  }
  return res;
};
