function search(nums, target) {
  if (!nums || !nums.length) {
    return -1;
  }
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = Math.trunc((end - start) / 2) + start;
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < nums[end]) {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
}
