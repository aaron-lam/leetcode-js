const balancedStringSplit = (s) => {
  let balance = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    balance += (s[i] === "R" ? 1 : -1);
    if (balance === 0) {
      res += 1;
      balance = 0;
    }
  }
  return res;
};
