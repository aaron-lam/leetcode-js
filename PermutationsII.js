const permuteUnique = (nums) => {
  if (!nums || !nums.length) {
    return [];
  }
  const res = [];
  nums.sort((a, b) => a - b);
  backtrack(res, [], nums, new Array(nums.length).fill(false));
  return res;
};

const backtrack = (res, list, nums, used) => {
  if (list.length === nums.length) {
    res.push([...list]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i] || i > 0 && nums[i] === nums[i - 1] && used[i - 1]) {
      continue;
    }
    used[i] = true;
    list.push(nums[i]);
    backtrack(res, list, nums, used);
    used[i] = false;
    list.pop();
  }
};
