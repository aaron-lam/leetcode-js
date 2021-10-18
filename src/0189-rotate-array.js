const rotate = (nums, k) => {
  const n = nums.length;
  k %= n;
  const midIndex = n - 1 - k;
  reverse(nums, 0, midIndex);
  reverse(nums, midIndex + 1, n - 1);
  reverse(nums, 0, n - 1);
  return nums;
};

const reverse = (nums, start, end) => {
  while (start <= end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start += 1;
    end -= 1;
  }
};
