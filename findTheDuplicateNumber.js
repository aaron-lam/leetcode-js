// binary search
const findDuplicate = (nums) => {
  if (!nums || !nums.length) {
    return null;
  }
  let start = 1, end = nums.length - 1;
  while (start < end) {
    const mid = Math.floor((end - start) / 2) + start;
    let count = 0;
    nums.forEach((n) => {
      if (n <= mid) {
        count += 1;
      }
    });
    if (count <= mid) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const findDuplicate2 = (nums) => {
  if (!nums || !nums.length) {
    return null;
  }
  let slow = nums[0], fast = nums[slow];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while (fast !== slow) {
    fast = nums[fast];
    slow = nums[slow];
  }
  return slow;
};
