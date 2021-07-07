const isNum = (c) => !isNaN(c);

const decodeString = (s) => {
  if (s == null || s.length === 0) {
    return "";
  }
  const stack = [];
  let curNum = 0;
  let curStr = "";
  for (const c of s.split("")) {
    if (c === '[') {
      stack.push([curStr, curNum]);
      curStr = "";
      curNum = 0;
    } else if (c == "]") {
      const [prevStr, num] = stack.pop();
      curStr = prevStr + curStr.repeat(num);
    } else if (isNum(c)) {
      curNum = curNum * 10 + Number(c);
    } else {
      curStr += c;
    }
  }
  return curStr;
}
