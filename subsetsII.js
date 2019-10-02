const subsetsWithDup = (nums) => {
  const res = [];
  nums.sort((a, b) => a - b);
  backtrack(res, [], nums, 0);
  return res;
};

const backtrack = (res, list, nums, start) => {
  res.push([...list]);
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }
    list.push(nums[i]);
    backtrack(res, list, nums, i + 1);
    list.pop();
  }
};
