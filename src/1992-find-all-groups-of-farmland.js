const findFarmland = (land) => {
  const res = [];
  const m = land.length;
  const n = land[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 1) {
        let rightI = i;
        let rightJ = j;
        while (rightI < m && land[rightI][j] === 1) {
          rightI += 1;
        }
        while (rightJ < n && land[i][rightJ] === 1) {
          rightJ += 1;
        }
        for (let x = i; x < rightI; x++) {
          for (let y = j; y < rightJ; y++) {
            land[x][y] = 0;
          }
        }
        res.push([i, j, rightI - 1, rightJ - 1]);
      }
    }
  }
  return res;
};
