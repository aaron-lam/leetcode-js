const isAbsDiffNotGreaterThan = (a, b, target) => Math.abs(a - b) <= target;

const isGoodTriplet = (arr, i, j, k, a, b, c) => {
  return isAbsDiffNotGreaterThan(arr[i], arr[j], a)
    && isAbsDiffNotGreaterThan(arr[j], arr[k], b)
    && isAbsDiffNotGreaterThan(arr[i], arr[k], c)
}

// Solution 1: Brute force
const countGoodTriplets = (arr, a, b, c) => {
  if (arr == null || arr.length === 0) {
    return 0;
  }
  let numOfGoodTriplets = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (isGoodTriplet(arr, i, j, k, a, b, c)) {
          numOfGoodTriplets += 1;
        }
      }
    }
  }
  return numOfGoodTriplets;
};

// Solution 2: Still brute force, but did a little optimization
const countGoodTriplets = (arr, a, b, c) => {
  if (arr == null || arr.length === 0) {
    return 0;
  }
  let numOfGoodTriplets = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (!isAbsDiffNotGreaterThan(arr[i], arr[j], a)) {
        continue;
      }
      for (let k = j + 1; k < arr.length; k++) {
        if (isAbsDiffNotGreaterThan(arr[j], arr[k], b)
          && isAbsDiffNotGreaterThan(arr[i], arr[k], c)) {
          numOfGoodTriplets += 1;
        }
      }
    }
  }
  return numOfGoodTriplets;
};
