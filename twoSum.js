const twoSum = (nums, target) => {
  if (!nums) {
    return null;
  }
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (another in map) {
      return [map[another], i];
    }
    map[nums[i]] = i;
  }
  return null;
};
