const convertToTitle = (columnNumber) =>
  columnNumber === 0 ? "" : convertToTitle(Math.floor(--columnNumber / 26)) + String.fromCharCode(columnNumber % 26 + 65);
