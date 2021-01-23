const diff = (n1, n2) => Math.abs(n1 - n2);

// Solution 1: Greedy
const minTimeToVisitAllPoints = (points) => {
  let res = 0;
  for (let i = 1; i < points.length; i++) {
    const [curX, curY] = points[i];
    const [prevX, prevY] = points[i - 1];
    res += Math.max(diff(curX, prevX), diff(curY, prevY));
  }
  return res;
};
