const encode = (strs) => {
  const res = [];
  for (const str of strs) {
    res.push(str.length);
    res.push("/");
    res.push(str);
  }
  return res.join("");
};

const decode = (s) => {
  const res = [];
  let i = 0;
  while (i < s.length) {
    const slashIndex = s.indexOf("/", i);
    const len = parseInt(s.substring(i, slashIndex));
    i = slashIndex + len + 1;
    res.push(s.substring(slashIndex + 1, i));
  }
  return res;
};
