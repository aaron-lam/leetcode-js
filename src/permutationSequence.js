const getPermutation = (n, k) => {
  const factorial = buildFactorialList(n);
  let nums = buildNumsList(n);
  let s = "";
  k -= 1;
  for (let i = 1; i <= n; i++) {
    const index = Math.floor(k / factorial[n - i]);
    s += nums[index];
    nums = nums.filter(n => n !== nums[index]);
    k -= index * factorial[n - i];
  }
  return String(s);
};

const buildFactorialList = (n) => {
  let sum = 1;
  const factorial = [1];
  for (let i = 1; i <= n; i++) {
    sum *= i;
    factorial[i] = sum;
  }
  return factorial;
};

const buildNumsList = (n) => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i);
  }
  return res;
};
