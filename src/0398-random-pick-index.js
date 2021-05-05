// Solution 1: Hash Map
class Solution {
  constructor(nums) {
    this.nums = nums;
    this.map = new Map();
    nums.forEach((num, idx) => {
      if (!this.map.has(num)) {
        this.map.set(num, []);
      }
      this.map.get(num).push(idx);
    });
  }

  pick(target) {
    const list = this.map.get(target);
    const randomIdx = Math.floor(Math.random() * list.length);
    return list[randomIdx];
  }
}

// Solution 2: Reservoir Sampling
class Solution {
  constructor(nums) {
    this.nums = nums;
  }
  
  pick(target) {
    let res = -1;
    let count = 0;
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] !== target) {
        continue;
      }
      count += 1;
      if (Math.floor(Math.random() * count) === 0) {
        res = i;
      }
    }
    return res;
  }
}
