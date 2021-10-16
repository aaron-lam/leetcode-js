const LESS_THAN_TWENTY = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

const THOUSANDS = ["", "Thousand", "Million", "Billion"];

const numberToWords = function (num) {
  if (num === 0) {
    return "Zero";
  }
  let i = 0;
  let res = "";
  while (num > 0) {
    if (num % 1000 !== 0) {
      res = helper(num % 1000) + THOUSANDS[i] + " " + res;
    }
    num = Math.floor(num / 1000);
    i += 1;
  }
  return res.trim();
};

const helper = (num) => {
  if (num === 0) {
    return "";
  }
  if (num < 20) {
    return LESS_THAN_TWENTY[num] + " ";
  }
  if (num < 100) {
    return TENS[Math.floor(num / 10)] + " " + helper(num % 10);
  }
  return LESS_THAN_TWENTY[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
};
