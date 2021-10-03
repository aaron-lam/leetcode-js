const maxProduct = (s) => {
  let res = 0;
  const dfs = (s, i, s1, s2) => {
    if (i >= s.length) {
      if (isPalindrome(s1) && isPalindrome(s2)) {
        res = Math.max(res, s1.length * s2.length);
      }
      return;
    }
    s1.push(s[i]);
    dfs(s, i + 1, s1, s2);
    s1.pop();
    s2.push(s[i]);
    dfs(s, i + 1, s1, s2);
    s2.pop();
    dfs(s, i + 1, s1, s2);
  };
  dfs(s, 0, [], []);
  return res;
};

const isPalindrome = (s) => {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
