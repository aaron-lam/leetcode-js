const minWindow = (s, t) => {
  if (!s || !s.length || !t || !t.length) {
    return "";
  }
  const map = {};
  t.split("").forEach(c => map[c] = (map[c]) ? map[c] + 1 : 1);
  let start = 0, end = 0, minStart = 0, minLen = Number.MAX_VALUE, counter = t.length;
  while (end < s.length) {
    if (map[s[end]] > 0) {
      counter -= 1;
    }
    map[s[end]] = (map[s[end]]) ? map[s[end]] - 1 : -1;
    end += 1;
    while (counter === 0) {
      if (minLen > end - start) {
        minLen = end - start;
        minStart = start;
      }
      map[s[start]] += 1;
      if (map[s[start]] > 0) {
        counter += 1;
      }
      start += 1;
    }
  }
  return minLen === Number.MAX_VALUE ? "" : s.substring(minStart, minStart + minLen);
};
