class MyQueue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  push(x) {
    this.input.push(x);
  }

  pop() {
    this.peek();
    return this.output.pop();
  }

  peek() {
    if (this.output.length === 0) {
      while (this.input.length > 0) {
        this.output.push(this.input.pop());
      }
    }
    return this.output[this.output.length - 1];
  }

  empty() {
    return this.input.length === 0 && this.output.length === 0;
  }
}
