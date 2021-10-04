const countQuadruplets = (nums) => {
  const map = new Map();
  const n = nums.length;
  let res = 0;
  map.set(nums[n - 1], 1);
  for (let i = n - 2; i > 1; i--) {
    for (let j = i - 1; j > 0; j--) {
      for (let k = j - 1; k >= 0; k--) {
        const sum = nums[i] + nums[j] + nums[k];
        if (map.has(sum)) {
          res += map.get(sum);
        }
      }
    }
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }
  return res;
};
