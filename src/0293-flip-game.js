const generatePossibleNextMoves = (currentState) => {
  if (currentState == null || currentState.length < 2) {
    return [];
  }
  const res = [];
  for (let i = 0; i < currentState.length - 1; i++) {
    if (currentState[i] === "+" && currentState[i + 1] == "+") {
      res.push(currentState.substring(0, i) + "--" + currentState.substring(i + 2));
    }
  }
  return res;
};
