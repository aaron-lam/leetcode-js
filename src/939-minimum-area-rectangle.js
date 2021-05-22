const rectArea = (x1, y1, x2, y2) => Math.abs(x1 - x2) * Math.abs(y1 - y2);

const minAreaRect = (points) => {
  const map = new Map();
  for (const [x, y] of points) {
    if (!map.has(x)) {
      map.set(x, new Set());
    }
    map.get(x).add(y);
  }
  let res = Number.POSITIVE_INFINITY;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      if (x1 === x2 || y1 === y2) {
        continue;
      }
      if (map.get(x1).has(y2) && map.get(x2).has(y1)) {
        res = Math.min(res, rectArea(x1, y1, x2, y2));
      }
    }
  }
  return res === Number.POSITIVE_INFINITY ? 0 : res;
};
