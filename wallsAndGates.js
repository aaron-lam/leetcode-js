// dfs
const wallsAndGates = (rooms) => {
  if (!rooms || !rooms.length || !rooms[0].length) {
    return rooms;
  }
  const m = rooms.length, n = rooms[0].length;
  const dfs = (i, j, val) => {
    if (i < 0 || i >= m || j < 0 || j >= n || rooms[i][j] < val) {
      return;
    }
    rooms[i][j] = val;
    dfs(i + 1, j, val + 1);
    dfs(i - 1, j, val + 1);
    dfs(i, j + 1, val + 1);
    dfs(i, j - 1, val + 1);
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] == 0) {
        dfs(i, j, 0);
      }
    }
  }
};

const wallsAndGates = (rooms) => {
  if (!rooms || !rooms.length || !rooms[0].length) {
    return rooms;
  }
  const m = rooms.length, n = rooms[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [1, -1]];
  const q = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] == 0) {
        q.push([i, j]);
      }
    }
  }
  while (q.length > 0) {
    const [x, y] = q.shift();
    for (const [dx, dy] of dirs) {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < m &&
        newY >= 0 && newY < newY &&
        rooms[newX][newY] > rooms[x][y] + 1) {
        q.push([newX, newY]);
        rooms[newX][newY] = rooms[x][y] + 1;
      }
    }
  }
};
