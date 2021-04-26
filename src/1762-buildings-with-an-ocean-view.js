const findBuildings = (heights) => {
  if (heights == null || heights.length === 0) {
    return [];
  }
  const res = [];
  let max = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      max = heights[i];
      res.unshift(i);
    }
  }
  return res;
};
