const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const m = nums1.length;
  const n = nums2.length;
  let start = 0;
  let end = m;
  while (start <= end) {
    let i = Math.trunc((start + end) / 2);
    let j = Math.trunc((m + n + 1) / 2) - i;
    let maxLeftX = (i === 0) ? Number.NEGATIVE_INFINITY : nums1[i - 1];
    let minRightX = (i === m) ? Number.POSITIVE_INFINITY : nums1[i];
    let maxLeftY = (j === 0) ? Number.NEGATIVE_INFINITY : nums2[j - 1];
    let minRightY = (j === n) ? Number.POSITIVE_INFINITY : nums2[j];
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      }
      return Math.max(maxLeftX, maxLeftY);
    } else if (maxLeftX > minRightY) {
      end = i - 1;
    } else {
      start = i + 1;
    }
  }
  throw new Error();
};
