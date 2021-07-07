const maximumGap = (nums) => {
  if (!nums || nums.length < 2) {
    return 0;
  }
  const min = Math.min.apply(null, nums);
  const max = Math.max.apply(null, nums);
  const len = nums.length;
  const gap = Math.ceil((max - min) / (len - 1));
  let bucketsMin = new Array(len - 1).fill(Number.MAX_VALUE);
  let bucketsMax = new Array(len - 1).fill(Number.MIN_VALUE);
  for (const n of nums) {
    if (n === min || n === max) {
      continue;
    }
    const idx = Math.floor((n - min) / gap);
    bucketsMin[idx] = Math.min(bucketsMin[idx], n);
    bucketsMax[idx] = Math.max(bucketsMax[idx], n);
  }
  let maxGap = Number.MIN_VALUE;
  let prev = min;
  for (let i = 0; i < nums.length - 1; i++) {
    if (bucketsMin[i] === Number.MAX_VALUE && bucketsMax[i] === Number.MIN_VALUE) {
      continue;
    }
    maxGap = Math.max(maxGap, bucketsMin[i] - prev);
    prev = bucketsMax[i];
  }
  maxGap = Math.max(maxGap, max - prev);
  return maxGap;
};
