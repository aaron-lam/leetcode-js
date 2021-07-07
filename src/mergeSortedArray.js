const merge = (nums1, m, nums2, n) => {
  if (!nums1 || !nums2) {
    return nums1 ? nums1 : nums2;
  }
  let idx = m + n - 1;
  m -= 1;
  n -= 1;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[idx] = nums1[m];
      m -= 1;
    } else {
      nums1[idx] = nums2[n];
      n -= 1;
    }
    idx -= 1;
  }
  while (n >= 0) {
    nums1[idx] = nums2[n];
    n -= 1;
    idx -= 1;
  }
  return nums1;
};
