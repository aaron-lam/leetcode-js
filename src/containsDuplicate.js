const containsDuplicate = (nums) => {
  if (!nums || !nums.length) {
    return false;
  }
  return new Set(nums).size !== nums.length;
};
