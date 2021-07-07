const isStrobogrammatic = (num) => {
  const map = new Map();
  map.set("0", "0");
  map.set("1", "1");
  map.set("8", "8");
  map.set("6", "9");
  map.set("9", "6");
  let start = 0,
    end = num.length - 1;
  while (start <= end) {
    if (!map.has(num[start]) || map.get(num[start]) !== num[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
