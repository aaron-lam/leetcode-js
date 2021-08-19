const maxArea = (height) => {
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;
  while (start < end) {
    const w = end - start;
    const h = Math.min(height[start], height[end]);
    const area = w * h;
    maxArea = Math.max(maxArea, area);
    if (height[start] < height[end]) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return maxArea;
};
