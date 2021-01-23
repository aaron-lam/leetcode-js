const convertToTitle = (n) => {
  if (n <= 0) {
    return "";
  }
  if (n < 27) {
    return asciiToChar(n);
  }
  return convertToTitle(Math.floor(n - 1) / 26) + asciiToChar(n);
};

const asciiToChar = (n) => String.fromCharCode(((n - 1) % 26) + 65);
