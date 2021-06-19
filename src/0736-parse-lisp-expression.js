const evaluate = (expression) => {
  return eval(expression, new Map());
};

const isDigit = (c) => c >= "0" && c <= "9";

const parse = (str) => {
  const res = [];
  let par = 0;
  let s = [];
  for (const c of str.split("")) {
    if (c === "(") {
      par += 1;
    }
    if (c === ")") {
      par -= 1;
    }
    if (par === 0 && c === " ") {
      res.push(s.join(""));
      s = [];
    } else {
      s.push(c);
    }
  }
  if (s.length > 0) {
    res.push(s.join(""));
  }
  return res;
}

const eval = (exp, parent) => {
  if (exp[0] !== "(") {
    if (isDigit(exp[0]) || exp[0] === "-") {
      return Number(exp);
    }
    return parent.get(exp);
  }
  const map = new Map();
  for (const entry of parent.entries()) {
    map.set(entry[0], entry[1]);
  }
  const tokens = parse(exp.substring(exp[1] === "m" ? 6 : 5, exp.length - 1));
  if (exp.startsWith("(a")) {
    return eval(tokens[0], map) + eval(tokens[1], map);
  }
  if (exp.startsWith("(m")) {
    return eval(tokens[0], map) * eval(tokens[1], map);
  }
  for (let i = 0; i < tokens.length - 2; i += 2) {
    map.set(tokens[i], eval(tokens[i + 1], map));
  }
  return eval(tokens[tokens.length - 1], map);
}
