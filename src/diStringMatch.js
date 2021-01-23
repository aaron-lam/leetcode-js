const diStringMatch = (S) => {
  if (!S || !S.length) {
    return [];
  }
  const n = S.length;
  const res = [];
  let start = 0, end = n;
  for (let i = 0; i < n; i++) {
    res.push((S[i] === 'I') ? start++ : end--);
  }
  res[n] = start;
  return res;
};
