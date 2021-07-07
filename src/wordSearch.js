const exist = (board, word) => {
  const m = board.length,
    n = board[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const search = (i, j, idx) => {
    if (idx === word.length) {
      return true;
    }
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[idx]) {
      return false;
    }
    visited[i][j] = true;
    if (
      search(i + 1, j, idx + 1) ||
      search(i - 1, j, idx + 1) ||
      search(i, j + 1, idx + 1) ||
      search(i, j - 1, idx + 1)
    ) {
      return true;
    }
    visited[i][j] = false;
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && search(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
