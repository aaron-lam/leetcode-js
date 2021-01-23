const addOperators = (num, target) => {
  let res = [];

  function helper(num, diff, curSum, str, res) {
    if (num.length === 0 && curSum === target) {
      res.push(str);
      return;
    }
    for (let i = 1; i <= num.length; i++) {
      const cur = num.substring(0, i);
      const next = num.substring(i);
      const n = Number(cur);
      if (cur.length > 1 && cur[0] === '0') {
        return;
      }
      if (n > Number.MAX_VALUE) {
        return;
      }
      if (str.length > 0) {
        helper(next, n, curSum + n, str + '+' + cur, res);
        helper(next, -n, curSum - n, str + '-' + cur, res);
        helper(next, diff * n, (curSum - diff) + diff * n, str + '*' + cur, res);
      } else {
        helper(next, n, n, cur, res);
      }
    }
  }

  helper(num, 0, 0, '', res);
  return res;
};
