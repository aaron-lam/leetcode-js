const canJump = (nums) => {
  if (!nums || !nums.length) {
    return false;
  }
  let maxDist = 0;
  for (let i = 0; i <= maxDist; i++) {
    maxDist = Math.max(maxDist, i + nums[i]);
    if (maxDist >= nums.length - 1) {
      return true;
    }
  }
  return false;
};
