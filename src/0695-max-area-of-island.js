// dfs
const maxAreaOfIsland = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(grid, m, n, i, j));
      }
    }
  }
  return res;
};

const dfs = (grid, m, n, i, j) => {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
    return 0;
  }
  grid[i][j] = 0;
  return (
    1 + dfs(grid, m, n, i + 1, j) + dfs(grid, m, n, i - 1, j) + dfs(grid, m, n, i, j - 1) + dfs(grid, m, n, i, j + 1)
  );
};

// bfs
const maxAreaOfIsland = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, bfs(grid, m, n, i, j));
      }
    }
  }
  return res;
};

const bfs = (grid, m, n, i, j) => {
  const queue = [[i, j]];
  let area = 0;
  const DIRS = [[1, 0], [-1, 0], [0, -1], [0, 1]];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0) {
      continue;
    }
    area += 1;
    grid[x][y] = 0;
    for (const [dx, dy] of DIRS) {
      queue.push([x + dx, y + dy]);
    }
  }
  return area;
}

