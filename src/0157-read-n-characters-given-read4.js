const solution = (read4) => {

  const internalBuf = [];
  
  return function(buf, n) {
    let readChars = 0;
    while (n > 0) {
      if (internalBuf.length === 0 && read4(internalBuf) === 0) {
        return readChars;
      }
      buf.push(internalBuf.shift());
      readChars += 1;
      n -= 1;
    }
    return readChars;
  };
};
