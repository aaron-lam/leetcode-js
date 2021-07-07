const maxIncreaseKeepingSkyline = (grid) => {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length,
    n = grid[0].length;
  const row = new Array(m).fill(0);
  const col = new Array(n).fill(0);
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row[i] = Math.max(row[i], grid[i][j]);
      col[j] = Math.max(col[j], grid[i][j]);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res += Math.min(row[i], col[j]) - grid[i][j];
    }
  }
  return res;
};
