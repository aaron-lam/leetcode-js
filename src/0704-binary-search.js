const search = (nums, target) => {
  if (nums == null || nums.length === 0) {
    return -1;
  }
  let start = 0, end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((end - start) / 2) + start;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
