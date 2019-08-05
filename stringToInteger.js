const myAtoi = (str) => {
  if (!str) {
    return 0;
  }
  str = str.trim();
  if (!str.length) {
    return 0;
  }
  let sign = 1, i = 0, res = 0;
  if (str[i] === '+') {
    sign = 1;
    i += 1;
  } else if (str[i] === '-') {
    sign = - 1;
    i += 1;
  }
  for (; i < str.length; i++) {
    let temp = str.charCodeAt(i) - 48;
    if (temp > 9 || temp < 0) {
      break;
    }
    if (res > 2147483647 / 10 ||
      res > (2147483647 - temp) / 10) {
      return (sign === 1) ? 2147483647: -2147483648;
    }
    res = res * 10 + temp;
  }
  return res * sign;
};
