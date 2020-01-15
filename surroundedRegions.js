// dfs
const solve = (board) => {
  if (!board || !board.length || !board[0].length) {
    return;
  }
  const m = board.length, n = board[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const dfs = (i, j) => {
    if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] == 'O') {
      board[i][j] = '.';
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i == 0 || i == m - 1 || j == 0 || j == n - 1) &&
        board[i][j] == 'O') {
        dfs(i, j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] == '.') {
        board[i][j] = 'O';
      }
    }
  }
};

// bfs
const solve = (board) => {
  if (!board || !board.length || !board[0].length) {
    return;
  }
  const m = board.length, n = board[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const bfs = (i, j) => {
    const q = [[i, j]];
    board[i][j] = '.';
    while (q.length > 0) {
      const [x, y] = q.shift();
      for (const [dx, dy] of dirs) {
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < m &&
          newY >= 0 && newY < n &&
          board[newX][newY] == 'O') {
          q.push([newX, newY]);
          board[newX][newY] = '.';
        }
      }
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i == 0 || i == m - 1 || j == 0 || j == n - 1) &&
        board[i][j] == 'O') {
        bfs(i, j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] == '.') {
        board[i][j] = 'O';
      }
    }
  }
};
