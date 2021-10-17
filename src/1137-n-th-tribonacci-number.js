const tribonacci = (n) => {
  if (n < 2) {
    return n;
  }
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;
  for (let i = 2; i < n; i++) {
    let t3 = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = t3;
  }
  return t2;
};
