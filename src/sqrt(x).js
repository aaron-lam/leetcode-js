const mySqrt = (x) => {
  if (x <= 1) {
    return x;
  }
  for (let i = 1; i <= x; i++) {
    if (i > x / i) {
      return i - 1;
    }
  }
  return - 1;
};

const mySqrt = (x) => {
  let left = 1, right = x;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (mid === x / mid) {
      return mid;
    } else if (mid < x / mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

const mySqrt = (n, epsilon) => {
  let x = n;
  let y = 1;
  while (x - y > epsilon) {
    x = (x + y) / 2;
    y = n / x;
  }
  return x.toFixed();
};

console.log(mySqrt(8, 0.01));
