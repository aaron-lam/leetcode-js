// dfs approach
const numIslands = (grid) => {

  const backtrack = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
      return;
    }
    grid[i][j] = '0';
    backtrack(i + 1, j);
    backtrack(i - 1, j);
    backtrack(i, j + 1);
    backtrack(i, j - 1);
  };

  if (!grid || !grid.length) {
    return 0;
  }
  const m = grid.length, n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        backtrack(i, j);
        res += 1;
      }
    }
  }
  return res;
};

// bfs approach
const numIslands = (grid) => {

  const backtrack = (i, j) => {
    const queue = [[i, j]];
    grid[i][j] = '0';
    while (queue.length) {
      const [x, y] = queue.shift();
      for (const dir of directions) {
        const nextX = x + dir[0];
        const nextY = y + dir[1];
        if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && grid[nextX][nextY] === '1') {
          queue.push([nextX, nextY]);
          grid[nextX][nextY] = '0';
        }
      }
    }
  };

  if (!grid || !grid.length) {
    return 0;
  }
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const m = grid.length, n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        backtrack(i , j);
        res += 1;
      }
    }
  }
  return res;
};
