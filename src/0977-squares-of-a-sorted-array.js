const sortedSquares = (nums) => {
  const res = new Array(nums.length);
  let start = 0;
  let end = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      res[i] = nums[start] * nums[start];
      start += 1;
    } else {
      res[i] = nums[end] * nums[end];
      end -= 1;
    }
  }
  return res;
};
