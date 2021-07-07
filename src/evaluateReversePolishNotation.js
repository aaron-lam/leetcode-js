const evalRPN = (tokens) => {
  if (!tokens || !tokens.length) {
    return 0;
  }
  let a = 0,
    b = 0;
  const s = [];
  for (const token of tokens) {
    switch (token) {
      case "+":
        s.push(s.pop() + s.pop());
        break;
      case "-":
        b = s.pop();
        a = s.pop();
        s.push(a - b);
        break;
      case "*":
        s.push(s.pop() * s.pop());
        break;
      case "/":
        b = s.pop();
        a = s.pop();
        s.push(a / b);
        break;
      default:
        s.push(Number(token));
    }
  }
  return s.pop();
};
