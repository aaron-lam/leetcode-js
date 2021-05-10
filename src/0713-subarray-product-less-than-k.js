const numSubarrayProductLessThanK = (nums, k) => {
  if (k === 0) {
    return 0;
  }
  let product = 1;
  let res = 0;
  for (let end = 0, start = 0; end < nums.length; end++) {
    product *= nums[end];
    while (start <= end && product >= k) {
      product = Math.floor(product / nums[start]);
      start += 1;
    }
    res += end - start + 1;
  }
  return res;
};
