const increasingTriplet = (nums) => {
  if (!nums || nums.length < 3) {
    return false;
  }
  let min = nums[0],
    secondMin = Infinity;
  for (let num of nums) {
    if (num <= min) {
      min = num;
    } else if (num <= secondMin) {
      secondMin = num;
    } else {
      return true;
    }
  }
  return false;
};
