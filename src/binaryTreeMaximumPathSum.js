// recursive
const maxPathSum = (root) => {
  let maxValue = Number.NEGATIVE_INFINITY;

  const maxPathDown = (root) => {
    if (!root) {
      return 0;
    }
    const left = Math.max(0, maxPathDown(root.left));
    const right = Math.max(0, maxPathDown(root.right));
    maxValue = Math.max(maxValue, left + right + root.val);
    return Math.max(left, right) + root.val;
  };

  maxPathDown(root);
  return maxValue;
};
