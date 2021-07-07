const isWater = (grid, i, j) => i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0;

const getPerimeter = (grid, i, j) => {
  let res = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (const [x, y] of dirs) {
    if (isWater(grid, i + x, j + y)) {
      res += 1;
    }
  }
  return res;
};

const islandPerimeter = (grid) => {
  const m = grid.length,
    n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        res += getPerimeter(grid, i, j);
      }
    }
  }
  return res;
};
