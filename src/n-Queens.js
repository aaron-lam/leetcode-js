function solveNQueens(n) {
  const board = new Array(n).fill(0).map(() => new Array(n).fill("."));
  const res = [];

  function dfs(colIdx) {
    if (colIdx == board.length) {
      res.push(construct(board));
      return;
    }
    for (let i = 0; i < board.length; i++) {
      if (validate(i, colIdx)) {
        board[i][colIdx] = "Q";
        dfs(colIdx + 1);
        board[i][colIdx] = ".";
      }
    }
  }

  function validate(x, y) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < y; j++) {
        if (board[i][j] == "Q" && (x + j == y + i || x + y == i + j || x == i)) {
          return false;
        }
      }
    }
    return true;
  }

  dfs(0);
  return res;
}

function construct(board) {
  const res = [];
  for (let i = 0; i < board.length; i++) {
    res.push(board[i].join(""));
  }
  return res;
}
