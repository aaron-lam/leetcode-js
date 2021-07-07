const verticalTraversal = (root) => {
  const nodes = [];
  dfs(root, nodes, 0, 0);
  nodes.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);
  const map = new Map();
  for (const [x, _, val] of nodes) {
    if (!map.has(x)) {
      map.set(x, []);
    }
    map.get(x).push(val);
  }
  return [...map.values()];
};

const dfs = (root, nodes, x, y) => {
  if (root == null) {
    return;
  }
  dfs(root.left, nodes, x - 1, y - 1);
  nodes.push([x, y, root.val]);
  dfs(root.right, nodes, x + 1, y - 1);
};
