// BFS approach
const levelOrder = (root) => {
  if (root == null) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    const list = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      list.push(node.val);
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
    res.push(list);
  }
  return res;
};

// DFS approach
const levelOrderBottom = (root) => {
  const maxDepth = (root) => {
    if (root == null) {
      return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  };

  const helper = (node, level, res) => {
    if (node == null) {
      return;
    }
    if (res[depth - level - 1] == null) {
      res[depth - level - 1] = [];
    }
    res[depth - level - 1].push(node.val);
    helper(node.left, level + 1, res);
    helper(node.right, level + 1, res);
  };

  const res = [];
  const depth = maxDepth(root);
  helper(root, 0, res);
  return res;
};
