const isStrobogrammatic = (num) => {
  if (num == null || num.length === 0) {
    return true;
  }
  const map = {
    "6": "9",
    "9": "6",
    "0": "0",
    "1": "1",
    "8": "8",
  }
  let start = 0, end = num.length - 1;
  while (start <= end) {
    const digit1 = num.charAt(start);
    const digit2 = num.charAt(end);
    if (!map[digit1] || (map[digit1] !== digit2)) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
