const hammingDistance = (x, y) => {
  return [...(x ^ y).toString(2)].filter((c) => c === "1").length;
};
