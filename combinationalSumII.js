const combinationSum2 = (candidates, target) => {
  if (!candidates || !candidates.length) {
    return [];
  }
  candidates.sort((a, b) => a - b);
  const res = [];
  backtrack(res, candidates, [], target, 0);
  return res;
};

const backtrack = (res, candidates, list, target, start) => {
  if (target < 0) {
    return;
  }
  if (!target) {
    res.push([...list]);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    }
    list.push(candidates[i]);
    backtrack(res, candidates, list, target - candidates[i], i + 1);
    list.pop();
  }
};
