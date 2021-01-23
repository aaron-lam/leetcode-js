const decodeString = (s) => {
  if (!s || !s.length) {
    return "";
  }
  let res = "";
  const countStack = [];
  const resStack = [];
  let idx = 0;
  while (idx < s.length) {
    if (!isNaN(s[idx])) {
      let count = 0;
      while (!isNaN(s[idx])) {
        count = count * 10 + (s[idx] - '0');
        idx += 1;
      }
      countStack.push(count);
    } else if (s[idx] === '[') {
      resStack.push(res);
      res = "";
      idx += 1;
    } else if (s[idx] === ']') {
      let temp = String(resStack.pop());
      let repeatTimes = countStack.pop();
      for (let i = 0; i < repeatTimes; i++) {
        temp += res;
      }
      res = temp;
      idx += 1;
    } else {
      res += s[idx];
      idx += 1;
    }
  }
  return res;
};
