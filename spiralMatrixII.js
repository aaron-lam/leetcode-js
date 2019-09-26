const generateMatrix = (n) => {
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let cur = 1;
  let rowBegin = 0;
  let rowEnd = n - 1;
  let colBegin = 0;
  let colEnd = n - 1;
  while (cur <= n * n) {
    for (let j = colBegin; j <= colEnd; j++) {
      res[rowBegin][j] = cur;
      cur += 1;
    }
    rowBegin += 1;
    for (let i = rowBegin; i <= rowEnd; i++) {
      res[i][colEnd] = cur;
      cur += 1;
    }
    colEnd -= 1;
    for (let j = colEnd; j >= colBegin; j--) {
      res[rowEnd][j] = cur;
      cur += 1;
    }
    rowEnd -= 1;
    for (let i = rowEnd; i >= rowBegin; i--) {
      res[i][colBegin] = cur;
      cur += 1;
    }
    colBegin += 1;
  }
  return res;
};
