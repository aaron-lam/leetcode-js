const solveSudoku = (board) => {
  if (board == null || board.length === 0) {
    return;
  }
  solve(board);
};

const solve = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === ".") {
        for (let c = 1; c <= 9; c++) {
          if (isValid(board, i, j, c.toString())) {
            board[i][j] = c.toString();
            if (solve(board)) {
              return true;
            }
            board[i][j] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
}

const isValid = (board, row, col, num) => {
  const subBoxRow = Math.floor(row / 3) * 3;
  const subBoxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 9; i++) {
    const curRow = board[i][col];
    if (board[i][col] === num
        || board[row][i] === num
        || board[subBoxRow + Math.floor(i / 3)][subBoxCol + i % 3] === num) {
      return false;
    }
  }
  return true;
}
