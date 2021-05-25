const fractionToDecimal = (numerator, denominator) => {
  if (numerator === 0) {
    return "0";
  }
  const res = [];
  if ((numerator > 0 && denominator < 0) || (numerator < 0 && denominator > 0)) {
    res.push("-");
  }
  let num = Math.abs(numerator);
  let den = Math.abs(denominator);
  res.push(Math.floor(num / den));
  num %= den;
  if (num === 0) {
    return res.join("");
  }
  res.push(".");
  const map = new Map();
  map.set(num, res.length);
  while (num !== 0) {
    num *= 10;
    res.push(Math.floor(num / den));
    num %= den;
    if (map.has(num)) {
      const index = map.get(num);
      res.splice(index, 0, "(");
      res.push(")");
      break;
    } else {
      map.set(num, res.length);
    }
  }
  return res.join("");
};
