class EncodedIterator {
  constructor(arr) {
    this.arr = arr;
    this.index = 0;
    this.subIndex = 0;
  }
  next() {
    this.subIndex += 1;
    return this.arr[this.index][0];
  }
  hasNext() {
    if (this.subIndex === this.arr[this.index][1]) {
      this.index += 1;
      this.subIndex = 0;
    }
    if (this.index === this.arr.length) {
      return false;
    }
    return true;
  }
}

const findRLEArray = (encoded1, encoded2) => {
  const res = [];
  const iterator1 = new EncodedIterator(encoded1);
  const iterator2 = new EncodedIterator(encoded2);
  while (iterator1.hasNext() && iterator2.hasNext()) {
    const num1 = iterator1.next();
    const num2 = iterator2.next();
    const product = num1 * num2;
    if (res.length === 0 || res[res.length - 1][0] !== product) {
      res.push([product, 1]);
    } else {
      res[res.length - 1][1] += 1;
    }
  }
  return res;
};
