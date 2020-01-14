const convert = (s, numRows) => {
  const c = s.split("");
  const len = c.length;
  const res = new Array(numRows).fill(0).map(() => []);
  let i = 0;
  while (i < len) {
    for (let idx = 0; idx < numRows && i < len; idx++) {
      res[idx].push(c[i++]);
    }
    for (let idx = numRows - 2; idx >= 1 && i < len; idx--) {
      res[idx].push(c[i++]);
    }
  }
  for (let i = 1; i < res.length; i++) {
    res[0] = res[0].concat(res[i]);
  }
  return res[0].join("");
};
