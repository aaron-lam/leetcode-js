const compress = (chars) => {
  if (!chars || !chars.length) {
    return chars;
  }
  let j = 0, i = 0;
  while (i < chars.length) {
    const c = chars[i];
    let count = 0;
    while (i < chars.length && chars[i] === c) {
      count += 1;
      i += 1;
    }
    chars[j++] = c;
    if (count !== 1) {
      const s = String(count);
      for (const ch of s.split("")) {
        chars[j++] = ch;
      }
    }
  }
  return j;
};

console.log(compress("a"));
