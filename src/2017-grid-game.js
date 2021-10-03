const gridGame = (grid) => {
  const n = grid[0].length;
  let res = Number.POSITIVE_INFINITY;
  let topSum = grid[0].reduce((acc, val) => acc + val);
  let bottomSum = 0;
  for (let i = 0; i < n; i++) {
    topSum -= grid[0][i];
    res = Math.min(res, Math.max(topSum, bottomSum));
    bottomSum += grid[1][i];
  }
  return res;
};
