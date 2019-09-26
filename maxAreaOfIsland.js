// dfs approach
const maxAreaOfIsland = (grid) => {

  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || !grid[i][j]) {
      return 0;
    }
    grid[i][j] = 0;
    return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 1;
  };

  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }
  let maxArea = 0;
  const m = grid.length, n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }
  return maxArea;
};

// bfs approach
const maxAreaOfIsland = (grid) => {

  const bfs = (i, j) => {
    let area = 0;
    const queue = [[i, j]];
    grid[i][j] = 0;
    while (queue.length) {
      const [x, y] = queue.pop();
      area += 1;
      for (const dir of directions) {
        const nextX = x + dir[0];
        const nextY = y + dir[1];
        if (0 <= nextX && nextX < m && 0 <= nextY && nextY < n && grid[nextX][nextY]) {
          queue.unshift([nextX, nextY]);
          grid[nextX][nextY] = 0;
        }
      }
    }
    return area;
  };

  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }
  let maxArea = 0;
  const m = grid.length, n = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        maxArea = Math.max(maxArea, bfs(i, j));
      }
    }
  }
  return maxArea;
};
