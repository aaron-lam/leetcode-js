const expand = (s) => {
  const res = [];
  dfs(s, "", res);
  res.sort();
  return res;
};

const dfs = (s, word, res) => {
  if (s.length === 0) {
    res.push(word);
    return;
  }
  if (s[0] === "{") {
    const end = s.indexOf("}");
    const firstBrace = s.substring(1, end);
    for (const c of firstBrace.split(",")) {
      dfs(s.substring(end + 1), word + c, res);
    }
  } else {
    dfs(s.substring(1), word + s[0], res);
  }
}
