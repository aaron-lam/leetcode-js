const groupThePeople = (groupSizes) => {
  if (!groupSizes || !groupSizes.length) {
    return [];
  }
  const map = new Map();
  const res = [];
  for (let i = 0; i < groupSizes.length; i++) {
    const n = groupSizes[i];
    const cur = map.get(n) || [];
    cur.push(i);
    map.set(n, cur);
    if (cur.length === n) {
      res.push(cur);
      map.delete(n);
    }
  }
  return res;
};
