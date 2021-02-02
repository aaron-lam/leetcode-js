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

// Solution 2: Binary Search + Recursive, O(log(m + n))
const isNullOrEmpty = (nums) => nums == null || nums.length === 0;

const isEven = (num) => num % 2 === 0;

const isOdd = (num) => !isEven(num);

const getMedian = (sortedNums) => {
  if (isNullOrEmpty(sortedNums)) {
    throw new Error("Both arrays are empty.");
  }
  if (sortedNums.length === 1) {
    return sortedNums[0];
  }
  const medianIndex = Math.floor(sortedNums.length / 2);
  return isOdd(sortedNums.length) ?
    sortedNums[medianIndex] :
    (sortedNums[medianIndex - 1] + sortedNums[medianIndex]) / 2;
}

const findMedianSortedArrays = function(nums1, nums2) {
  if (isNullOrEmpty(nums1) && isNullOrEmpty(nums2)) {
    throw new Error("Both arrays are empty.");
  }
  if (isNullOrEmpty(nums1) || isNullOrEmpty(nums2)) {
    return getMedian(isNullOrEmpty(nums2) ? nums1 : nums2);
  }
  const totalLen = nums1.length + nums2.length;
  if (isEven(totalLen)) {
    const left = findKthNumber(nums1, 0, nums2, 0, Math.floor(totalLen / 2));
    const right = findKthNumber(nums1, 0, nums2, 0, Math.floor(totalLen / 2) + 1);
    return (left + right) / 2;
  } else {
    return findKthNumber(nums1, 0, nums2, 0, Math.floor(totalLen / 2) + 1);
  }
}

const findKthNumber = (nums1, i, nums2, j, k) => {
  if (nums1.length - i > nums2.length - j) {
    return findKthNumber(nums2, j, nums1, i, k);
  }
  if (k === 1) {
    return nums1.length === i ? nums2[j] : Math.min(nums1[i], nums2[j]);
  }
  if (nums1.length === i) {
    return nums2[j + k - 1];
  }
  const medianIndex1 = Math.min(nums1.length, i + Math.floor(k / 2));
  const medianIndex2 = j + k - Math.floor(k / 2);
  if (nums1[medianIndex1 - 1] > nums2[medianIndex2 - 1]) {
    return findKthNumber(nums1, i, nums2, medianIndex2, k - (medianIndex2 - j));
  }
  return findKthNumber(nums1, medianIndex1, nums2, j, k - (medianIndex1 - i));
}
