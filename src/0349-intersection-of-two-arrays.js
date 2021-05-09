const intersection = (nums1, nums2) => {
  const set = new Set();
  for (const num of nums1) {
    set.add(num);
  }
  const res = new Set();
  for (const num of nums2) {
    if (set.has(num)) {
      res.add(num);
    }
  }
  return [...res];
};
