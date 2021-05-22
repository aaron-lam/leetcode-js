const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const res = new Set();
  for (const num of nums2) {
    if (set1.has(num)) {
      res.add(num);
    }
  }
  return [...res];
};
