class MonotonicQueue extends Array {
  add(n) {
    while (this.length > 0 && n > this[this.length - 1]) {
      this.pop();
    }
    this.push(n);
  }

  remove(n) {
    if (n === this[0]) {
      this.shift();
    }
  }
}

const maxSlidingWindow = (nums, k) => {
  if (!nums || !nums.length || k <= 0) {
    return [];
  }
  let res = [];
  let queue = new MonotonicQueue();
  let j = 0;
  nums.forEach((num, i) => {
    queue.add(num);
    if (i >= k - 1) {
      res.push(queue[0]);
      queue.remove(nums[j]);
      j += 1;
    }
  });
  return res;
};
