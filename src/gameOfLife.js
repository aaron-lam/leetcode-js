const gameOfLife = (board) => {
  if (!board || !board.length || !board[0].length) {
    return board;
  }
  const m = board.length;
  const n = board[0].length;
  const LIVE_TO_DEAD = 2;
  const REBORN = 3;
  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  const countLiveNeighbor = (i, j) => {
    let counts = 0;
    for (const [x, y] of dirs) {
      let newI = i + x;
      let newJ = j + y;
      if (
        newI >= 0 &&
        newI < m &&
        newJ >= 0 &&
        newJ < n &&
        (board[newI][newJ] === 1 || board[newI][newJ] === LIVE_TO_DEAD)
      ) {
        counts += 1;
      }
    }
    return counts;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const liveNeighbor = countLiveNeighbor(i, j);
      if (!board[i][j]) {
        if (liveNeighbor === 3) {
          board[i][j] = REBORN;
        }
      } else {
        if (liveNeighbor < 2 || liveNeighbor > 3) {
          board[i][j] = LIVE_TO_DEAD;
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === REBORN) {
        board[i][j] = 1;
      }
      if (board[i][j] === LIVE_TO_DEAD) {
        board[i][j] = 0;
      }
    }
  }

  return board;
};
