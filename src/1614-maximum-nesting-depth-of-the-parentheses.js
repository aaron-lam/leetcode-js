const maxDepth = (s) => {
  if (s == null || s.length === 0) {
    return 0;
  }
  let res = 0;
  let cur = 0;
  for (const c of s.split("")) {
    if (c === "(") {
      cur += 1;
      res = Math.max(res, cur);
    } else if (c === ")") {
      cur -= 1;
    }
  }
  return res;
};
