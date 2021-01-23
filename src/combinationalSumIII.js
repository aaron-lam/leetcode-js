const combinationSum3 = (k, n) => {
  const res = [];
  backtrack(res, [], k, n, 1);
  return res;
};

const backtrack = (res, list, k, n, start) => {
  if (list.length === k && n === 0) {
    res.push([...list]);
    return;
  }
  for (let i = start; i <= 9; i++) {
    list.push(i);
    backtrack(res, list, k, n - i, i + 1);
    list.pop();
  }
};
