const isPalindrome = (x) => {
  if ((x && !(x % 10)) || x < 0) {
    return false;
  }
  let res = 0;
  while (res < x) {
    res = res * 10 + x % 10;
    x = (x / 10) | 0;
  }
  return res === x || ((res / 10) | 0) === x;
};
