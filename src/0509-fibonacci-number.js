const fib = (n) => {
  if (n === 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};
