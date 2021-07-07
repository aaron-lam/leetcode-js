const findStrobogrammatic = (n) => dfs(n, n);

const dfs = (curLen, n) => {
  if (curLen === 0) {
    return [""];
  }
  if (curLen === 1) {
    return ["0", "1", "8"];
  }
  const nums = dfs(curLen - 2, n);
  const res = [];
  for (const num of nums) {
    if (curLen !== n) {
      res.push("0" + num + "0");
    }
    res.push("1" + num + "1");
    res.push("8" + num + "8");
    res.push("6" + num + "9");
    res.push("9" + num + "6");
  }
  return res;
}
