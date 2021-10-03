const inBoard = (board, i, j) => i >= 0 && j >= 0 && i < board.length && j < board[0].length;

const placeWordInCrossword = (board, word) => {
  const m = board.length;
  const n = board[0].length;
  const DIRS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === " " || board[i][j] === word[0]) {
        for (const [x, y] of DIRS) {
          let row = i;
          let col = j;
          let idx = 0;
          const newRow = row - x;
          const newCol = col - y;
          if (inBoard(board, newRow, newCol) && board[newRow][newCol] !== "#") {
            continue;
          }
          while (idx < word.length && inBoard(board, row, col)) {
            if (board[row][col] === "#" || (board[row][col] !== " " && board[row][col] !== word[idx])) {
              break;
            }
            idx += 1;
            row += x;
            col += y;
          }
          if (idx === word.length && (!inBoard(board, row, col) || board[row][col] === "#")) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
