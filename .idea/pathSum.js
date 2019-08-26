// recursive
const hasPathSum = (root, sum) => {
  if (root === null) {
    return false;
  }
  if (!root.left && !root.right && sum - root.val === 0) {
    return true;
  }
  return hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val);
};

// iterative
const hasPathSum = (root, sum) => {
  if (!root) {
    return false;
  }
  const queue = [root, sum - root.val];
  while (queue.length) {
    const [node, val] = queue.shift();
    if (!node.left && !node.right && val === node.val) {
      return true;
    }
    if (node.left) {
      queue.push([node.left, val - node.val]);
    }
    if (node.right) {
      queue.push([node.right, val - node.val]);
    }
  }
}
