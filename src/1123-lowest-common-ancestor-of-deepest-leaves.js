const lcaDeepestLeaves = (root) => {
  const traverse = (root) => {
    if (root == null) {
      return [0, null];
    }
    const [depth1, node1] = traverse(root.left);
    const [depth2, node2] = traverse(root.right);
    if (depth1 > depth2) {
      return [depth1 + 1, node1];
    }
    if (depth1 < depth2) {
      return [depth2 + 1, node2];
    }
    return [depth1 + 1, root];
  }
  return traverse(root)[1];
};
