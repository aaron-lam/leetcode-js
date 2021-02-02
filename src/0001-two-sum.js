const twoSum = (nums, target) => {
  if (nums == null || nums.length === 0) {
    throw new Error("Target not found");
  }
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  throw new Error("Target not found");
}
