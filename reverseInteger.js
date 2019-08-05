const reverse = (x) => {
  const max = Math.pow(2, 31);
  let res = 0;
  while (x !== 0) {
    res = res * 10 + x % 10;
    if (res > max || res < -max) {
      return 0;
    }
    x = (x / 10) | 0;
  }
  return res;
};
