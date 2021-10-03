const sumOfBeauties = (nums) => {
  const n = nums.length;
  let leftMax = nums[0];
  const rightMin = new Array(n);
  rightMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(nums[i], rightMin[i + 1]);
  }
  let res = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > leftMax && nums[i] < rightMin[i + 1]) {
      res += 2;
    } else if (nums[i] > nums[i - 1] && nums[i] < nums[i + 1]) {
      res += 1;
    }
    leftMax = Math.max(leftMax, nums[i]);
  }
  return res;
};
