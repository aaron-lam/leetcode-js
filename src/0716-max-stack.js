const isEmpty = (arr) => arr.length === 0;

const peek = (arr) => !isEmpty(arr) ? arr[arr.length - 1] : null;

class MaxStack {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  
  push(x) {
    this.s1.push(x);
    if (isEmpty(this.s2) || peek(this.s2) <= x) {
      this.s2.push(x);
    }
  }
  
  pop() {
    if (peek(this.s1) === peek(this.s2) && !isEmpty(this.s2)) {
      this.s2.pop();
    }
    return !isEmpty(this.s1) ? this.s1.pop() : null;
  }

  top() {
    return peek(this.s1);
  }
  
  peekMax() {
    return peek(this.s2);
  }
  
  popMax() {
    const max = peek(this.s2);
    const temp = [];
    while (peek(this.s1) !== peek(this.s2)) {
      temp.push(this.s1.pop());
    }
    this.s1.pop();
    this.s2.pop();
    while (!isEmpty(temp)) {
      this.push(temp.pop());
    }
    return max;
  }
}
