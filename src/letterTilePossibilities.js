const numTilePossibilities = (tiles) => {
  const count = new Array(26).fill(0);
  for (const c of tiles.split("")) {
    count[c.charCodeAt(0) - 65] += 1;
  }
  return dfs(count);
};

const dfs = (arr) => {
  let sum = 0;
  for (let i = 0; i < 26; i++) {
    if (!arr[i]) {
      continue;
    }
    sum += 1;
    arr[i] -= 1;
    sum += dfs(arr);
    arr[i] += 1;
  }
  return sum;
};
