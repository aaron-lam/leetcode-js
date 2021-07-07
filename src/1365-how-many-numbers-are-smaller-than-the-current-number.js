const smallerNumbersThanCurrent = (nums) => {
  const sortedNums = Array.from(nums).sort((a, b) => b - a);
  const map = new Map(sortedNums.map((num, index) => [num, nums.length - index - 1]));
  return nums.map((num) => map.get(num));
};
