const LESS_THAN_20 = [
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

const numberToWords = (num) => {
  if (num === 0) {
    return "Zero";
  }
  let i = 0;
  let words = "";
  while (num > 0) {
    if (num % 1000 !== 0) {
      words = helper(num % 1000) + THOUSANDS[i] + " " + words;
    }
    num = (num / 1000) | 0;
    i += 1;
  }
  return words.trim();
};

const helper = (num) => {
  if (num === 0) {
    return "";
  } else if (num < 20) {
    return LESS_THAN_20[num] + " ";
  } else if (num < 100) {
    return TENS[(num / 10) | 0] + " " + helper(num % 10);
  }
  return LESS_THAN_20[(num / 100) | 0] + " Hundred " + helper(num % 100);
};
