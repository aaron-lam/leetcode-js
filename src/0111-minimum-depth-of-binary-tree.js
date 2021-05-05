// Solution 1: recursive
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

// Solution 2: iterative
const minDepth = (root) => {
  if (root == null) {
    return 0;
  }
  const queue = [root];
  let depth = 1;
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      if (node.left == null && node.right == null) {
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
