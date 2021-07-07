// dfs approach
const numIslands = (grid) => {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length,
    n = grid[0].length;
  let res = 0;
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == "0") {
      return;
    }
    grid[i][j] = "0";
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        res += 1;
      }
    }
  }
  return res;
};

// bfs approach
const numIslands = (grid) => {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }
  const m = grid.length,
    n = grid[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let res = 0;
  const bfs = (i, j) => {
    const q = [[i, j]];
    grid[i][j] = "0";
    while (q.length) {
      const [x, y] = q.shift();
      for (const [dx, dy] of dirs) {
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] == "1") {
          q.push([newX, newY]);
          grid[newX][newY] = "0";
        }
      }
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j);
        res += 1;
      }
    }
  }
  return res;
};
