const reverse = (x) => {
  const MAX = Math.pow(2, 31) - 1;
  let res = 0;
  while (x !== 0) {
    res = res * 10 + (x % 10);
    if (res > MAX || res <= -MAX) {
      return 0;
    }
    x = Math.trunc(x / 10);
  }
  return res;
};
