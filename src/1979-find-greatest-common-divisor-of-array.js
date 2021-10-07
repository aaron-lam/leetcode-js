const findGCD = (nums) => {
  const min = nums.reduce((min, val) => (val < min ? val : min));
  const max = nums.reduce((max, val) => (val > max ? val : max));
  return gcd(min, max);
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
