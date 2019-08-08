const threeSumClosest = (nums, target) => {
  if (!nums || nums.length < 3) {
    return null;
  }
  let res = nums[0] + nums[1] + nums[nums.length - 1];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < target) {
        left += 1;
      } else {
        right -= 1;
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
    }
  }
  return res;
};
