const largestValues = (root) => {
  const res = [];
  dfs(root, res, 0);
  return res.map((list) => Math.max(...list));
};

const dfs = (root, res, depth) => {
  if (root == null) {
    return;
  }
  if (res.length === depth) {
    res.push([]);
  }
  res[depth].push(root.val);
  dfs(root.left, res, depth + 1);
  dfs(root.right, res, depth + 1);
}
