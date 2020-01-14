const isPalindrome = (x) => {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }
  let temp = x;
  let res = 0;
  while (temp !== 0) {
    res = res * 10 + temp % 10;
    temp = Math.trunc(temp / 10);
  }
  return res === x;
};
