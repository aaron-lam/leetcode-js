class RandomizedSet {
  
  constructor() {
    this.nums = [];
    this.map = new Map();
  }
  
  insert(val) {
    if (this.map.has(val)) {
      return false;
    }
    this.map.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }
  
  remove(val) {
    if (!this.map.has(val)) {
      return false;
    }
    const index = this.map.get(val);
    if (index !== this.nums.length - 1) {
      const lastItem = this.nums[this.nums.length - 1];
      this.nums[index] = lastItem;
      this.map.set(lastItem, index);
    }
    this.map.delete(val);
    this.nums.pop();
    return true;
  }
  
  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
  }
}
