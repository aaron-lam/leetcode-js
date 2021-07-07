class MovingAverage {
  constructor(size) {
    this.q = [];
    this.sum = 0;
    this.size = size;
  }

  next(val) {
    if (this.q.length === this.size) {
      this.sum -= this.q.shift();
    }
    this.q.push(val);
    this.sum += val;
    return this.sum / this.q.length;
  }
}
