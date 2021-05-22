const findAnagrams = (s, p) => {
  const res = [];
  const map = new Map();
  for (const c of p) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  let start = 0;
  let end = 0;
  let count = p.length;
  for (let end = 0, start = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) ?? 0) - 1);
    if (map.get(s[end]) >= 0) {
      count -= 1;
    }
    if (count === 0) {
      res.push(start);
    }
    if (end - start + 1 === p.length) {
      map.set(s[start], map.get(s[start]) + 1);
      if (map.get(s[start]) >= 1) {
        count += 1;
      }
      start += 1;
    }
  }
  return res;
};
