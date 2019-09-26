// recursive
const minDepth = (root) => {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// iterative
const minDepth = (root) => {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    for (let size = queue.length; size > 0; size--) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return depth;
      }
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
