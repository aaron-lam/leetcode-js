const convert = (s, numRows) => {
  if (numRows <= 1) {
    return s;
  }
  let i = 0;
  const n = s.length;
  const rows = new Array(numRows).fill("");
  while (i < n) {
    for (let j = 0; j < numRows && i < n; j++) {
      rows[j] += s[i];
      i += 1;
    }
    for (let j = numRows - 2; j >= 1 && i < n; j--) {
      rows[j] += s[i];
      i += 1;
    }
  }
  return rows.join("");
};
