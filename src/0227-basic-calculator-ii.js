const isDigit = (s) => s != null && s.trim().length === 1 && !isNaN(s);

const calculate = (s) => {
  const stack = [];
  let num = 0;
  let operator = "+";
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (isDigit(ch)) {
      num = num * 10 + parseInt(ch);
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
