const strobogrammaticInRange = (low, high) => {
  const res = [0];
  for (let i = low.length; i <= high.length; i++) {
    ["", "0", "1", "8"].forEach((digit) => dfs(low, high, digit, i, res));
  }
  return res;
};

const dfs = (low, high, path, len, res) => {
  if (path.length >= len) {
    if (path.length !== len || (len !== 1 && path[0] === "0")) {
      return;
    }
    if (
      (len === low.length && parseInt(path) < parseInt(low)) ||
      (len === high.length && parseInt(path) > parseInt(high))
    ) {
      return;
    }
    res[0] += 1;
  }
  ["0", "1", "8"].forEach((digit) => dfs(low, high, digit + path + digit, len, res));
  dfs(low, high, "6" + path + "9", len, res);
  dfs(low, high, "9" + path + "6", len, res);
};
