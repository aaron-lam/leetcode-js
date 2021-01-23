const combinationSum = (candidates, target) => {
  const res = [];
  candidates.sort((a, b) => a - b);
  backtrack(res, [], candidates, target, 0);
  return res;
};

const backtrack = (res, list, candidates, target, start) => {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    res.push([...list]);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    list.push(candidates[i]);
    backtrack(res, list, candidates, target - candidates[i], i);
    list.pop();
  }
};
