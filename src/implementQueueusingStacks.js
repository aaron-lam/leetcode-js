class MyQueue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  push(x) {
    this.input.push(x);
  }

  pop() {
    if (!this.output.length) {
      this.moveInputToOutput();
    }
    return this.output.pop();
  }

  peek() {
    if (!this.output.length) {
      this.moveInputToOutput();
    }
    return this.output[this.output.length - 1];
  }

  moveInputToOutput() {
    while (this.input.length) {
      this.output.push(this.input.pop());
    }
  }

  empty() {
    return !this.input.length && !this.output.length;
  }
}
