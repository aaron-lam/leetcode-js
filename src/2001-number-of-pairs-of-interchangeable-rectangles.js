const interchangeableRectangles = (rectangles) => {
  const ratioCounts = new Map();
  for (const [width, height] of rectangles) {
    const ratio = width / height;
    ratioCounts.set(ratio, (ratioCounts.get(ratio) ?? 0) + 1);
  }
  let res = 0;
  for (const counts of ratioCounts.values()) {
    res += (counts * (counts - 1)) / 2;
  }
  return res;
};
