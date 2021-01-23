const rotate = (nums, k) => {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = temp;
  }
};