const nextPermutation = (nums) => {
  if (!nums || !nums.length) {
    return;
  }
  let firstSmall = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      firstSmall = i;
      break;
    }
  }
  if (firstSmall === -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }
  let firstLarge = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[firstSmall]) {
      firstLarge = i;
      break;
    }
  }
  swap(nums, firstSmall, firstLarge);
  reverse(nums, firstSmall + 1, nums.length - 1);
};

const swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
};

const reverse = (nums, i, j) => {
  while (i < j) {
    swap(nums, i, j);
    i += 1;
    j -= 1;
  }
};
