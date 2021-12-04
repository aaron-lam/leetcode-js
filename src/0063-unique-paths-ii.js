const hasObstacle = (grid, i, j) => grid[i][j] === 1;

const uniquePathsWithObstacles = (obstacleGrid) => {
  if (obstacleGrid == null || obstacleGrid.lengthh === 0) {
    return 0;
  }
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (!hasObstacle(obstacleGrid, i - 1, j - 1)) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
};

const uniquePathsWithObstacles = (obstacleGrid) => {
  if (obstacleGrid == null || obstacleGrid.lengthh === 0) {
    return 0;
  }
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  const dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
        continue;
      }
      if (j > 0) {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[n - 1];
};
