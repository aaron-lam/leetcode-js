const addToArrayForm = (num, k) => {
  const res = [];
  for (let i = num.length - 1; i >= 0 || k > 0; i--) {
    const sum = i >= 0 ? num[i] + k : k;
    res.unshift(sum % 10);
    k = Math.floor(sum / 10);
  }
  return res;
};
