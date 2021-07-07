const getSeq = (str) => {
  const seq = [];
  for (let i = 0; i < str.length - 1; i++) {
    const first = str[i].charCodeAt(0);
    const second = str[i + 1].charCodeAt(0);
    const diff = second - first;
    seq.push(diff + (diff < 0 ? 26 : 0));
  }
  return seq.join("-");
};

const groupStrings = function (strings) {
  const map = new Map();
  for (const str of strings) {
    const seq = getSeq(str);
    if (map.has(seq)) {
      map.get(seq).push(str);
    } else {
      map.set(seq, [str]);
    }
  }
  return [...map.values()];
};
