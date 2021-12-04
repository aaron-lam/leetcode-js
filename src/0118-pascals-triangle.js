const generate = (numRows) => {
  const res = [[1]];
  for (let i = 1; i < numRows; i++) {
    const newRow = [1];
    const curRow = res[i - 1];
    for (let j = 0; j < curRow.length - 1; j++) {
      newRow.push(curRow[j] + curRow[j + 1]);
    }
    newRow.push(1);
    res.push(newRow);
  }
  return res;
};
