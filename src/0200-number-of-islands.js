// dfs approach
const numIslands = (grid) => {
  if (grid == null || grid.length === 0) {
    return 0;
  }
  let res = 0;
  const m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, m, n, i, j);
        res += 1;
      }
    }
  }
  return res;
};

const dfs = (grid, m, n, i, j) => {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  dfs(grid, m, n, i + 1, j);
  dfs(grid, m, n, i - 1, j);
  dfs(grid, m, n, i, j + 1);
  dfs(grid, m, n, i, j - 1);
};

// bfs approach
const numIslands = (grid) => {
  if (grid == null || grid.length === 0) {
    return 0;
  }
  let res = 0;
  const m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        bfs(grid, m, n, i, j);
        res += 1;
      }
    }
  }
  return res;
};

const bfs = (grid, m, n, i, j) => {
  const queue = [[i, j]];
  const DIRECTIONS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === "0") {
      continue;
    }
    grid[x][y] = "0";
    for (const [dx, dy] of DIRECTIONS) {
      queue.push([x + dx, y + dy]);
    }
  }
};

// union find approach
const numIslands = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let count = 0;
  const uf = new UnionFind(m * n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count += 1;
        for (const [dx, dy] of DIRS) {
          const newI = i + dx;
          const newJ = j + dy;
          if (newI >= 0 && newJ >= 0 && newI < m && newJ < n && grid[newI][newJ] === "1") {
            if (uf.find(newI * n + newJ) !== uf.find(i * n + j)) {
              count -= 1;
            }
            uf.union(newI * n + newJ, i * n + j);
          }
        }
      }
    }
  }
  return count;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  
  union(x, y) {
    this.parent[this.find(x)] = this.find(y);
  }
}
