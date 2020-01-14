const generate = (numRows) => {
  const res = [];
  const row = [];
  for (let i = 0; i < numRows; i++) {
    row.unshift(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = row[j] + row[j + 1];
    }
    res.push([...row]);
  }
  return res;
};
