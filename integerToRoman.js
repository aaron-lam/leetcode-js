const intToRoman = (num) => {
  if (num <= 0) {
    return '';
  }
  const intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let roman = '';
  for (let i = 0; i < intArr.length; i++) {
    while (num >= intArr[i]) {
      num -= intArr[i];
      roman += romanArr[i];
    }
  }
  return roman;
};
