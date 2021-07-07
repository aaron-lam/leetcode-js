const knows = (i, j) => {
  const graph = [
    [1, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ];
  return Boolean(graph[i][j]);
};

const findCelebrity = (n) => {
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (knows(res, i)) {
      res = i;
    }
  }
  for (let i = 0; i < res; i++) {
    if (knows(res, i) || !knows(i, res)) {
      return -1;
    }
  }
  for (let i = res; i < n; i++) {
    if (!knows(i, res)) {
      return -1;
    }
  }
  return res;
};

console.log(findCelebrity(3));
