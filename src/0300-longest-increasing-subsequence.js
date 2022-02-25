const lengthOfLIS = (nums) => {
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < arr[0]) {
      arr[0] = nums[i];
    } else if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      let start = 0,
        end = arr.length;
      while (start < end) {
        const mid = Math.floor((end - start) / 2) + start;
        if (arr[mid] < nums[i]) {
          start = mid + 1;
        } else {
          end = mid;
        }
      }
      arr[end] = nums[i];
    }
  }
  return arr.length;
};
