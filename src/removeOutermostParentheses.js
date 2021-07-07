const removeOuterParentheses = (S) => {
  if (!S || !S.length) {
    return "";
  }
  let start = 0;
  let balance = 0;
  let res = "";
  for (let end = 0; end < S.length; end++) {
    balance += S[end] === "(" ? 1 : -1;
    if (!balance) {
      res += S.substring(start + 1, end);
      start = end + 1;
    }
  }
  return res;
};
