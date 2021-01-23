const toLowerCase = (str) => {
  const DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
  return str
    .split("")
    .map((c) => (c >= 'A' && c <= 'Z')
      ? String.fromCharCode(c.charCodeAt(0) + DIFF)
      : c)
    .join("");
};
