// recursive
const diameterOfBinaryTree = (root) => {
  let max = 0;
  const maxDepth = (root) => {
    if (!root) {
      return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };
  maxDepth(root);
  return max;
};
