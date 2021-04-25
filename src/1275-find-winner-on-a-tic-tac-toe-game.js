const tictactoe = (moves) => {
  if (moves == null || moves.length === 0) {
    return "Pending";
  }
  const board = new Array(3).fill("").map(() => new Array(3).fill(""));
  moves.forEach(([x, y], rounds) => {
    board[x][y] = rounds % 2 === 0 ? "A" : "B";
  });
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "") {
      console.log(board);
      return board[i][0];
    }
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== "") {
      return board[0][i];
    }
  }
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] !== "") {
    return board[1][1];
  }
  if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] !== "") {
    return board[1][1];
  }
  return moves.length === 9 ? "Draw" : "Pending";
};
