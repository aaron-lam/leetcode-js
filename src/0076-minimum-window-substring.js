const minWindow = (s, t) => {
  const map = new Map();
  for (const c of t) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  let count = t.length;
  let start = 0;
  let resStart = 0;
  let resLen = Number.POSITIVE_INFINITY;
  for (let end = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) ?? 0) - 1);
    if (map.get(s[end]) >= 0) {
      count -= 1;
    }
    while (count === 0) {
      if (end - start + 1 < resLen) {
        resLen = end - start + 1;
        resStart = start;
      }
      map.set(s[start], map.get(s[start]) + 1);
      if (map.get(s[start]) > 0) {
        count += 1;
      }
      start += 1;
    }
  }
  return resLen === Number.POSITIVE_INFINITY ? "" : s.substring(resStart, resStart + resLen);
};
