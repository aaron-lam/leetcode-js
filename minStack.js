class MinStack {

  constructor() {
    this.stack = [];
  }

  push(x) {
    const min = (this.stack.length) ? this.stack[this.stack.length - 1][1] : x;
    this.stack.push([x, Math.min(x, min)]);
  }

  pop() {
    if (this.stack.length) {
      this.stack.pop();
    }
  }

  top() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1][0];
    }
  }

  getMin() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1][1];
    }
  }
}
