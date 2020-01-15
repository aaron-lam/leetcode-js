const depthSumInverse = (nestedList) => {
  let res = 0;
  const list = [];
  const helper = (nl, depth) => {
    if (depth >= list.length) {
      list[depth] = 0;
    }
    if (typeof nl == "number") {
      list[depth] += nl;
    } else {
      for (const a of nl) {
        helper(a, depth + 1);
      }
    }
  };
  helper(nestedList, 0);
  for (let i = list.length - 1; i >= 0; i--) {
    res += list[i] * (list.length - i);
  }
  return res;
};

console.log(depthSumInverse([1,[4,[6]]]));
