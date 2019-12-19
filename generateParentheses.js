const generateParenthesis = (n) => {
  if (n < 1) {
    return [];
  }
  const res = [];

  const backtrack = (cur, left, right) => {
    if (cur.length === n * 2) {
      res.push(cur);
      return;
    }
    if (left < n) {
      backtrack(cur + "(", left + 1, right);
    }
    if (right < left) {
      backtrack(cur + ")", left, right + 1);
    }
  };

  backtrack("", 0, 0);
  return res;
};
