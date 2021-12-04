const intersect = (nums1, nums2) => {
  const map1 = buildNumCountsMap(nums1);
  const map2 = buildNumCountsMap(nums2);
  const set = new Set([...nums1, ...nums2]);
  let res = [];
  for (const num of set) {
    if (map1.has(num) && map2.has(num)) {
      const intersectionCounts = Math.min(map1.get(num), map2.get(num));
      res = [...res, ...new Array(intersectionCounts).fill(num)];
    }
  }
  return res;
};

const buildNumCountsMap = (nums) => {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  return map;
};
