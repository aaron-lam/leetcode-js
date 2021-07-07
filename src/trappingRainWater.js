const trap = (height) => {
  if (!height || !height.length) {
    return 0;
  }
  const n = height.length;
  let left = 0,
    right = n - 1;
  let maxLeft = 0,
    maxRight = 0;
  let sum = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        sum += maxLeft - height[left];
      }
      left += 1;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        sum += maxRight - height[right];
      }
      right -= 1;
    }
  }
  return sum;
};
