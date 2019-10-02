const solve = (board) => {

  const backtrack = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return;
    }
    if (board[i][j] === 'O') {
      board[i][j] = '*';
    }
    if (i > 1 && board[i - 1][j] === 'O') {
      backtrack(i - 1, j);
    }
    if (i <= board.length - 2 && board[i + 1][j] === 'O') {
      backtrack(i + 1, j);
    }
    if (j > 1 && board[i][j - 1] === 'O') {
      backtrack(i, j - 1);
    }
    if (j <= board[0].length - 2 && board[i][j + 1] === 'O') {
      backtrack(i, j + 1);
    }
  };

  if (!board || !board.length || !board[0].length) {
    return;
  }
  if (board.length < 2 || board[0].length < 2) {
    return;
  }
  const m = board.length, n = board[0].length;
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      backtrack(i, 0);
    }
    if (board[i][n - 1] === 'O') {
      backtrack(i, n - 1);
    }
  }
  for (let j = 0; j < n; j++) {
    if(board[0][j] === 'O') {
      backtrack(0, j);
    }
    if (board[m - 1][j] === 'O') {
      backtrack(m - 1, j);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] === '*') {
        board[i][j] = 'O';
      }
    }
  }
};
