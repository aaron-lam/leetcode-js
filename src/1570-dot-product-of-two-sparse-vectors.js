class SparseVector {
  constructor(nums) {
    this.map = new Map();
    nums.forEach((num, index) => {
      if (num !== 0) {
        this.map.set(index, num);
      }
    });
  }
  
  dotProduct(vec) {
    let res = 0;
    for (const [key, value] of vec.map.entries()) {
      if (value !== 0 && this.map.has(key)) {
        res += this.map.get(key) * value;
      }
    }
    return res;
  }
}
