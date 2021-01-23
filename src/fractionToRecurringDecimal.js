const fractionToDecimal = (numerator, denominator) => {
  if (!numerator) {
    return "0";
  }
  let res = "";
  res += ((numerator > 0) ^ (denominator > 0)) ? "-" : "";
  let num = Math.abs(numerator);
  let den = Math.abs(denominator);
  res += Math.trunc(num / den);
  num %= den;
  if (!num) {
    return res;
  }
  res += ".";
  const map = new Map();
  map.set(num, res.length);
  while (num) {
    num *= 10;
    res += Math.trunc(num / den);
    num %= den;
    if (map.has(num)) {
      const index = map.get(num);
      res = `${res.slice(0, index)}(${res.slice(index)}`;
      res += ")";
      break;
    } else {
      map.set(num, res.length);
    }
  }
  return res;
};
