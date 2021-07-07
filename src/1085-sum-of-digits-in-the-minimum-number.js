const sum = (n1, n2) => n1 + n2;
const min = (n1, n2) => Math.min(n1, n2);
const isEven = (num) => num % 2 === 0;

const sumOfDigits = (A) => {
  const SUM_DIGIT_ODD = 0,
    SUM_DIGIT_EVEN = 1;
  if (A == null || A.length === 0) {
    return SUM_DIGIT_EVEN;
  }
  const sumOfMinElementDigit = A.reduce(min, A[0])
    .toString()
    .split("")
    .map((digit) => Number(digit))
    .reduce(sum);
  return isEven(sumOfMinElementDigit) ? SUM_DIGIT_EVEN : SUM_DIGIT_ODD;
};
