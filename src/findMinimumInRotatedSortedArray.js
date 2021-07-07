function findMin(nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    if (nums[start] < nums[end]) {
      return nums[start];
    }
    const mid = Math.trunc((end - start) / 2) + start;
    if (nums[start] <= nums[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
}
