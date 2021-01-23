const totalNQueens = (n) => {
  const occupiedCols = new Set();
  const occupiedDiag1s = new Set();
  const occupiedDiag2s = new Set();

  const backtrack = (row, count) => {
    for (let col = 0; col < n; col++) {
      if (occupiedCols.has(col)) {
        continue;
      }
      const diag1 = row - col;
      if (occupiedDiag1s.has(diag1)) {
        continue;
      }
      const diag2 = row + col;
      if (occupiedDiag2s.has(diag2)) {
        continue;
      }
      if (row === n - 1) {
        count += 1;
      } else {
        occupiedCols.add(col);
        occupiedDiag1s.add(diag1);
        occupiedDiag2s.add(diag2);
        count = backtrack(row + 1, count, n);
        occupiedCols.remove(col);
        occupiedDiag1s.remove(diag1);
        occupiedDiag2s.remove(diag2);
      }
    }
    return count;
  };

  return backtrack(0, 0);
};
