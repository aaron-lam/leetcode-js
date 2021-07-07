const dirs = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const numDistinctIslands = (grid) => {
  const set = new Set();
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        const path = [];
        dfs(grid, i, j, 0, 0, path);
        if (!set.has(path.join(" "))) {
          set.add(path.join(" "));
          res += 1;
        }
      }
    }
  }
  return res;
};

const dfs = (grid, i, j, x, y, path) => {
  grid[i][j] = 0;
  path.push(x + "," + y);
  for (const [dx, dy] of dirs) {
    const newI = i + dx;
    const newJ = j + dy;
    if (newI < 0 || newI >= grid.length || newJ < 0 || newJ >= grid[0].length || grid[newI][newJ] === 0) {
      continue;
    }
    dfs(grid, newI, newJ, x + dx, y + dy, path);
  }
};
