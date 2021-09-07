const isDigit = (s) => s != null && s.trim().length === 1 && !isNaN(s);

const calculate = (s) => {
  let res = 0;
  let num = 0;
  let operator = "+";
  const stack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (isDigit(ch)) {
      num = num * 10 + parseInt(ch);
    }
    else if (ch === "(") {
      let parenthesisBalanceCount = 0;
      let j = i;
      while (j < n) {
        if (s[j] === "(") {
          parenthesisBalanceCount += 1;
        }
        else if (s[j] === ")") {
          parenthesisBalanceCount -= 1;
        }
        if (parenthesisBalanceCount === 0) {
          break;
        }
        j += 1;
      }
      num = calculate(s.substring(i + 1, j));
      i = j;
    }
    if (i === n - 1 || ch === "+" || ch === "-" || ch === "*" || ch === "/") {
      if (operator === "+") {
        stack.push(num);
      }
      else if (operator === "-") {
        stack.push(-num);
      }
      else if (operator === "*") {
        const prevNum = stack.pop();
        stack.push(prevNum * num);
      }
      else if (operator === "/") {
        const prevNum = stack.pop();
        stack.push(Math.trunc(prevNum / num));
      }
      operator = ch;
      num = 0;
    }
  }
  return stack.reduce((num, sum) => sum + num);
};
