const containsDuplicate = (nums) => {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};

// one-liner solution
const containsDuplicate = (nums) => nums.length !== new Set(nums).size;
