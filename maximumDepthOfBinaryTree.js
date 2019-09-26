// recursive
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// iterative
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let depth = 0;
  while (queue.length) {
    for (let size = queue.length; size > 0; size--) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth += 1;
  }
  return depth;
};
