const permute = (nums) => {
  if (!nums || !nums.length) {
    return [];
  }
  const res = [];
  backtrack(res, [], nums);
  return res;
};

const backtrack = (res, list, nums) => {
  if (list.length === nums.length) {
    res.push([...list]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (list.includes(nums[i])) {
      continue;
    }
    list.push(nums[i]);
    backtrack(res, list, nums);
    list.pop();
  }
};
