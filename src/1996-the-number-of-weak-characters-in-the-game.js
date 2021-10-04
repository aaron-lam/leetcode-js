const numberOfWeakCharacters = (properties) => {
  properties.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });
  let res = 0;
  let maxDefense = Number.NEGATIVE_INFINITY;
  for (let i = properties.length - 1; i >= 0; i--) {
    const [_, defense] = properties[i];
    if (defense < maxDefense) {
      res += 1;
    }
    maxDefense = Math.max(maxDefense, defense);
  }
  return res;
};
