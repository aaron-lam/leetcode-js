const longestCommonPrefix = (strs) => {
  if (!strs || !strs.length) {
    return "";
  }
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(res)) {
      res = res.slice(0, -1);
    }
  }
  return res;
};
