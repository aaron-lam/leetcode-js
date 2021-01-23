const balancedStringSplit = (s) => {
  if (!s || !s.length) {
    return 0;
  }
  let res = 0;
  let balance = 0;
  for (const c of s.split("")) {
    balance += (c === "L") ? 1 : -1;
    if (!balance) {
      res += 1;
    }
  }
  return res;
};
