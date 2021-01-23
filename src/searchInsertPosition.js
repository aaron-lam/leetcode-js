function searchInsert(nums, target) {
  if (!nums || !nums.length) {
    return 0;
  }
  let start = 0, end = nums.length - 1;
  while (start <= end) {
    const mid = Math.trunc((end - start) / 2) + start;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}
