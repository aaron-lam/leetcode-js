const groupStrings = (strings) => {
  const map = new Map();
  for (const s of strings) {
    const seq = getSeq(s);
    map.set(seq, (map.get(seq) ?? []).concat(s));
  }
  return [...map.values()];
}

const getSeq = (s) => {
  const seq = [];
  for (let i = 0; i < s.length - 1; i++) {
    let diff = s[i + 1].charCodeAt(0) - s[i].charCodeAt(0);
    if (diff < 0) {
      diff += 26;
    }
    seq.push(diff);
  }
  return seq.join("-");
}
