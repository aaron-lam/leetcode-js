const matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) {
    return mat;
  }
  const res = new Array(r).fill(0).map(() => new Array(c));
  let curRow = 0;
  let curCol = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      res[i][j] = mat[curRow][curCol];
      curCol += 1;
      if (curCol === n) {
        curRow += 1;
        curCol = 0;
      }
    }
  }
  return res;
};
