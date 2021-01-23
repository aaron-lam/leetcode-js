const myAtoi = (str) => {
  const MAX = Math.pow(2, 31) - 1;
  let res = 0;
  let i = 0;
  while (str[i] === ' ') {
    i += 1;
  }
  let sign = 1;
  if (str[i] === '+' || str[i] === '-') {
    sign = str[i++] === '+' ? 1 : -1;
  }
  while (str[i] !== " " && !isNaN(str[i])) {
    if (res > Math.trunc(MAX / 10) ||
      (res === Math.trunc(MAX / 10) && Number(str[i]) > 7)) {
      return (sign === 1) ? MAX : -MAX - 1;
    }
    res = res * 10 + Number(str[i++]);
  }
  return res * sign;
};
