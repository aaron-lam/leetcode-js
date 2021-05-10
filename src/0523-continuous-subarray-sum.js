const checkSubarraySum = (nums, k) => {
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0) {
      sum %= k;
    }
    const prev = map.get(sum);
    if (prev != null) {
      if (i - prev > 1) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }
  return false;
};
