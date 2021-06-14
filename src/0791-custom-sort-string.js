const customSortString = (order, str) => {
  const map = new Map();
  for (const c of str.split("")) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  const res = [];
  for (const c of order.split("")) {
    if (!map.has(c)) {
      continue;
    }
    while (map.get(c) > 0) {
      map.set(c, map.get(c) - 1);
      res.push(c);
    }
  }
  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode(97 + i);
    if (!map.has(c)) {
      continue;
    }
    while (map.get(c) > 0) {
      map.set(c, map.get(c) - 1);
      res.push(c);
    }
  }
  return res.join("");
};
