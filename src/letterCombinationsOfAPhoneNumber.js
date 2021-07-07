const map = [" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

/**
 * DFS, using recursion
 */
const letterCombinations = (digits) => {
  let res = [];
  if (!digits || !digits.length) {
    return res;
  }
  dfs(digits, res, "", 0);
  return res;
};

const dfs = (digits, res, cur, len) => {
  if (len === digits.length) {
    res.push(cur);
    return;
  }
  const s = map[digits.charAt(len)];
  s.split("").forEach((character) => {
    dfs(digits, res, cur + character, len + 1);
  });
};

/**
 * BFS, using queue
 */
const letterCombinations2 = (digits) => {
  let res = [];
  if (!digits || !digits.length) {
    return res;
  }
  res.unshift("");
  for (let i = 0; i < digits.length; i++) {
    const x = Number(digits.charAt(i));
    while (res[res.length - 1].length === i) {
      const t = res.pop();
      map[x].split("").forEach((s) => {
        res.unshift(t + s);
      });
    }
  }
  return res;
};
