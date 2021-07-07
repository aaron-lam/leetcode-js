const dfs = (root, res) => {
  let edge1 = 0,
    edge2 = 0;
  for (const neighbor of root.children) {
    const depth = dfs(neighbor, res);
    if (depth > edge1) {
      edge2 = edge1;
      edge1 = depth;
    } else if (depth > edge2) {
      edge2 = depth;
    }
  }
  res[0] = Math.max(res[0], edge1 + edge2);
  return edge1 + 1;
};
