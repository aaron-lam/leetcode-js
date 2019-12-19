const minTimeToVisitAllPoints = (points) => {
  if (!points || !points.length) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const from = points[i];
    const to = points[i + 1];
    res += Math.max(Math.abs(from[0] - to[0]), Math.abs(from[1] - to[1]));
  }
  return res;
};
