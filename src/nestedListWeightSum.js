const depthSum = (nestedList) => {
  return getSum(nestedList, 1);
};

const getSum = (nl, level) => {
  let res = 0;
  for (const a of nl) {
    res += typeof a == "number" ? a * level : getSum(a, level + 1);
  }
  return res;
};

console.log(depthSum([1, [4, [6]]]));
