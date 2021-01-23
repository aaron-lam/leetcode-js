const combine = (n, k) => {
  const res = [];
  backtrack(res, [], n, k, 1);
  return res;
};

const backtrack = (res, list, n, k, start) => {
  if (list.length === k) {
    res.push([...list]);
    return;
  }
  for (let i = start; i <= n; i++) {
    list.push(i);
    backtrack(res, list, n, k, i + 1);
    list.pop();
  }
};
