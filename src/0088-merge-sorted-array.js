const merge = (nums1, m, nums2, n) => {
  let resIdx = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[resIdx] = nums2[j];
      j -= 1;
    } else {
      nums1[resIdx] = nums1[i];
      i -= 1;
    }
    resIdx -= 1;
  }
  while (j >= 0) {
    nums1[resIdx] = nums2[j];
    j -= 1;
    resIdx -= 1;
  }
};
