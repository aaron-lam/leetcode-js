const threeSum = (nums) => {
  if (nums == null || nums.length < 3) {
    return [];
  }
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let start = i + 1, end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        res.push([nums[i], nums[start], nums[end]]);
        start += 1;
        end -= 1;
        while (start < end && nums[start] === nums[start - 1]) {
          start += 1;
        }
        while (start < end && nums[end] === nums[end + 1]) {
          end -= 1;
        }
      } else if (sum < 0) {
        start += 1;
      } else {
        end -= 1;
      }
    }
  }
  return res;
};
