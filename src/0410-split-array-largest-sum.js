const splitArray = (nums, m) => {
  let max = 0,
    sum = 0;
  for (const num of nums) {
    max = Math.max(max, num);
    sum += num;
  }
  let start = max,
    end = sum;
  while (start < end) {
    const mid = Math.floor((end - start) / 2) + start;
    if (canSplit(nums, mid, m)) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

const canSplit = (nums, target, m) => {
  let groupCounts = 1;
  let cur = 0;
  for (const num of nums) {
    if (cur + num > target) {
      cur = num;
      groupCounts += 1;
    } else {
      cur += num;
    }
  }
  return groupCounts <= m;
};
