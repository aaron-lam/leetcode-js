class DetectSquares {
  constructor() {
    this.pointCounts = new Map();
  }

  add([x, y]) {
    const key = x + "," + y;
    this.pointCounts.set(key, (this.pointCounts.get(key) ?? 0) + 1);
  }

  count([x1, y1]) {
    let res = 0;
    for (const [key, count] of this.pointCounts.entries()) {
      const [x2, y2] = key.split(",");
      if (Math.abs(x1 - x2) > 0 && Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
        res += count * this.getPointCounts([x1, y2]) * this.getPointCounts([x2, y1]);
      }
    }
    return res;
  }

  getPointCounts([x, y]) {
    return this.pointCounts.get(x + "," + y) ?? 0;
  }
}
