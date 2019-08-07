const threeSum = (nums) => {
  let res = [];
  if (!nums || nums.length < 3) {
    return res;
  }
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return res;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (!sum) {
        res.push([nums[i], nums[left], nums[right]]);
        left += 1;
        right -= 1;
        while (left < right && nums[left] === nums[left - 1]) {
          left += 1;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right -= 1;
        }
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return res;
};
