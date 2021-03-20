

const isArmstrong = (num) => {
  if (num < 0) {
    return false;
  }
  const numArray = num.split("");
  const powOfArrayLength = (num) => Math.pow(num, numArray.length);
  const sum = (a, b) => a + b;
  return numArray.map(powOfArrayLength).reduce(sum) === num;
}

