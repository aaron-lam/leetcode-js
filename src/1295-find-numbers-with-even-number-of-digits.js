const isEvenNumberOfDigits = (num) => num.toString().length % 2 === 0;

// Solution 1: Number to String
const findNumbers = (nums) => {
  let count = 0;
  for (const num of nums) {
    if (num.toString().length % 2 === 0) {
      count += 1;
    }
  }
  return count;
};

// Solution 2: 1-liner solution, idea is same as solution 1
const findNumbers = (nums) => nums.filter(isEvenNumberOfDigits).length;
