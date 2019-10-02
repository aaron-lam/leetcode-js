const solveNQueens = (n) => {

  const dfs = (colIndex) => {
    if (colIndex === board.length) {
      res.push(construct(board));
      return;
    }
    for (let i = 0; i < board.length; i++) {
      if (validate(i, colIndex)) {
        board[i][colIndex] = 'Q';
        dfs(colIndex + 1);
        board[i][colIndex] = '.';
      }
    }
  };

  const validate = (x, y) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < y; j++) {
        if (board[i][j] === 'Q' && (x + j === y + i || x + y === i + j || x === i)) {
          return false;
        }
      }
    }
    return true;
  };

  const construct = (board) => {
    const res = [];
    for (let i = 0; i < board.length; i++) {
      res.push(board[i].join(''));
    }
    return res;
  };

  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
  const res = [];
  dfs(0);
  return res;
};
