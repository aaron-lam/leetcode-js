const merge = (intervals) => {
  if (!intervals || !intervals.length) {
    return [];
  }
  intervals.sort((a, b) => (a[0] !== b[0]) ? a[0] - b[0] : a[1] - b[1]);
  let prev = intervals[0];
  let res = [prev];
  for (const interval of intervals) {
    if (interval[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      res.push(interval);
      prev = interval;
    }
  }
  return res;
};
