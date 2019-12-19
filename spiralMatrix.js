const spiralOrder = (matrix) => {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return [];
  }
  const res = [];
  let rowStart = 0, rowEnd = matrix.length - 1;
  let colStart = 0, colEnd = matrix[0].length - 1;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    rowStart += 1;
    for (let i = rowStart; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd -= 1;
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }
    rowEnd -= 1;
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        res.push(matrix[i][colStart]);
      }
    }
    colStart += 1;
  }
  return res;
};
