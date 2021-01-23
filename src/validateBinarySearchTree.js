const isValidBST = (root) => {
  let lowerBound = Number.NEGATIVE_INFINITY;
  let upperBound = Number.POSITIVE_INFINITY;
  return traverse(root, lowerBound, upperBound);
};

const traverse = (root, lowerBound, upperBound) => {
  if (!root) {
    return true;
  }
  if (root.val <= lowerBound || root.val >= upperBound) {
    return false;
  }
  return traverse(root.left, lowerBound, root.val) &&
    traverse(root.right, root.val, upperBound);
};

// iterative
const isValidBST = (root) => {
  if (!root) {
    return true;
  }
  const stack = [];
  let pre = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (pre && root.val <= pre.val) {
      return false;
    }
    pre = root;
    root = root.right;
  }
  return true;
};
