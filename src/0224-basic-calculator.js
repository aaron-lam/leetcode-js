const isDigit = (s) => s != null && s.trim().length === 1 && !isNaN(s);

const calculate = (s) => {
  let res = 0;
  let num = 0;
  let sign = 1;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (isDigit(ch)) {
      num = num * 10 + parseInt(ch);
    }
    else if (ch === "(") {
      let parenthesIsBalanceCount = 0;
      let j = i;
      while (j < n) {
        if (s[j] === "(") {
          parenthesIsBalanceCount += 1;
        }
        if (s[j] === ")") {
          parenthesIsBalanceCount -= 1;
        }
        if (parenthesIsBalanceCount === 0) {
          break;
        }
        j += 1;
      }
      num = calculate(s.substring(i + 1, j));
      i = j;
    }
    if (ch === "+" || ch === "-" || i === n - 1) {
      res += sign * num;
      num = 0;
      sign = (ch === "+") ? 1 : -1;
    }
  }
  return res;
};
