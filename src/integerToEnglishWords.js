const LESS_THAN_TWENTY = [
  "", "One", "Two", "Three", "Four", "Five",
  "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
  "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];

const TENS = [
  "", "Ten", "Twenty", "Thirty", "Forty", "Fifty",
  "Sixty", "Seventy", "Eighty", "Ninety"
];

const THOUSANDS = [
  "", "Thousand", "Million", "Billion"
];

const numberToWords = (num) => {
  if (!num) {
    return "Zero";
  }
  let i = 0;
  let words = "";
  while (num) {
    if (num % 1000) {
      words = toWord(num % 1000) + THOUSANDS[i] + " " + words;
    }
    num = Math.trunc(num / 1000);
    i += 1;
  }
  return words.trim();
};

const toWord = (num) => {
  if (!num) {
    return "";
  }
  if (num < 20) {
    return LESS_THAN_TWENTY[num] + " ";
  }
  if (num < 100) {
    return TENS[Math.trunc(num / 10)] + " " + toWord(num % 10);
  }
  return LESS_THAN_TWENTY[Math.trunc(num / 100)] + " Hundred " + toWord(num % 100);
};
