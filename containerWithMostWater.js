const maxArea = (height) => {
  let maxArea = 0, left = 0, right = height.length - 1;
  while (left < right) {
    let curHeight = Math.min(height[left], height[right]);
    let curWidth = right - left;
    let curArea = curHeight * curWidth;
    maxArea = Math.max(maxArea, curArea);
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return maxArea;
};
