const groupStrings = (strings) => {
  if (strings == null || strings.length === 0) {
    return [];
  }
  const map = new Map();
  for (const string of strings) {
    const seq = getSequence(string);
    if (!map.has(seq)) {
      map.set(seq, []);
    }
    map.get(seq).push(string);
  }
  return [...map.values()];
};

const getSequence = (string) => {
  let sequence = "";
  for (let i = 0 ; i < string.length - 1; i++) {
    let diff = string[i + 1].charCodeAt(0) - string[i].charCodeAt(0);
    if (diff < 0) {
      diff += 26;
    }
    sequence += diff + "-";
  }
  return sequence;
}
