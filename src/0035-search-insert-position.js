const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let res = null;
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
    res = mid;
  }
  return nums[res] < target ? res + 1 : res;
};
