const toHex = (num) => {
  if (num === 0) {
    return "0";
  }
  const words = "0123456789abcdef";
  let res = "";
  while (num !== 0) {
    res = words[num & 0xf] + res;
    num >>>= 4;
  }
  return res;
};
