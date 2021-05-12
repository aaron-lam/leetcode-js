const minWindow = (s, t) => {
  const map = new Map();
  for (const c of t.split("")) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  let len = Number.POSITIVE_INFINITY;
  let startIdx = 0;
  let charsCovered = 0;
  for (let end = 0, start = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) ?? 0) - 1);
    if (map.get(s[end]) >= 0) {
      charsCovered += 1;
    }
    while (charsCovered === t.length) {
      if (len > end - start + 1) {
        len = end - start + 1;
        startIdx = start;
      }
      map.set(s[start], (map.get(s[start]) ?? 0) + 1);
      if (map.get(s[start]) >= 1) {
        charsCovered -= 1;
      }
      start += 1;
    }
  }
  return len === Number.POSITIVE_INFINITY ? "" : s.substring(startIdx, startIdx + len);
};
