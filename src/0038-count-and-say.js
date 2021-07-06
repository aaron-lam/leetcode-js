const countAndSay = (n) => {
  let res = ["1"];
  for (let i = 1; i < n; i++) {
    res = build(res);
  }
  return res.join("");
};

const build = (s) => {
  const res = [];
  let i = 0;
  while (i < s.length) {
    const val = s[i];
    let count = 0;
    while (i < s.length && val === s[i]) {
      count += 1;
      i += 1;
    }
    res.push(count + "");
    res.push(val);
  }
  return res;
}
