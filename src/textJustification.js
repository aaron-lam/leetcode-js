const fullJustify = (words, maxWidth) => {
  if (!words || !words.length || maxWidth <= 0) {
    return [];
  }
  let lines = createLines(words, maxWidth);
  lines = justifyLines(lines, maxWidth);
  return lines;
};

const createLines = (words, maxWidth) => {
  const lines = [];
  let idx = 0;
  while (idx < words.length) {
    const line = [];
    while (idx < words.length) {
      const peek = words[idx];
      const peekLen = [...line, peek].join(' ').length;
      if (peekLen <= maxWidth) {
        line.push(peek);
        idx += 1;
      } else {
        break;
      }
    }
    lines.push(line);
  }
  return lines;
};

const justifyLines = (lines, maxWidth) => {
  const justified = [];
  for (let l = 0; l < lines.length - 1; l++) {
    const line = lines[l];
    const spaces = (maxWidth - line.join('').length);
    for (let i = 0; i < spaces; i++) {
      const index = i % ((line.length - 1) || 1);
      line[index] += ' ';
    }
    push(justified, maxWidth, line, '');
  }
  push(justified, maxWidth, lines[lines.length - 1], ' ');
  return justified;
};

const push = (justified, maxWidth, line, space) => {
  const text = line.join(space);
  const extra = ' '.repeat(maxWidth - text.length);
  justified.push(text + extra);
};
