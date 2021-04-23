const summaryRanges = (nums) => {
  if (nums == null || nums.length === 0) {
    return [];
  }
  let start = 0, end = 0;
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
      end += 1;
      i += 1;
    }
    if (start === end) {
      res.push(`${nums[start]}`);
    } else {
      res.push(`${nums[start]}->${nums[end]}`);
    }
    end += 1;
    start = end;
  }
  return res;
};
