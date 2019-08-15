class Store {
  constructor(degree, startIdx, endIdx) {
    this.degree = degree;
    this.startIdx = startIdx;
    this.endIdx = endIdx;
  }
}

const findShortestSubArray = (nums) => {
  if (!nums || !nums.length) {
    return 0;
  }
  const map = {};
  nums.forEach((num, i) => {
    if (!(num in map)) {
      map[num] = new Store(1, i, i);
    } else {
      map[num].degree += 1;
      map[num].endIdx = i;
    }
  });
  let degree = Number.MIN_VALUE, res = Number.MAX_VALUE;
  for (const value in map) {
    const val = map[value];
    if (val.degree > degree) {
      degree = val.degree;
      res = val.endIdx - val.startIdx + 1;
    } else if (val.degree === degree) {
      res = Math.min(res, val.endIdx - val.startIdx + 1);
    }
  }
  return res;
};
