const minRemoveToMakeValid = (s) => {
  if (s == null || s.length === 0) {
    return "";
  }
  const sArr = s.split("");
  const stack = [];
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(") {
      stack.push(i);
    }
    if (sArr[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        sArr[i] = "*";
      }
    }
  }
  while (stack.length > 0) {
    sArr[stack.pop()] = "*";
  }
  return sArr.filter((c) => c !== "*").join("");
};
