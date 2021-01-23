// Solution 1: top-down approach
const isBalanced = (root) => {
  if (root == null) {
    return true;
  }
  const left = depth(root.left);
  const right = depth(root.right);
  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

const depth = (root) => {
  if (root == null) {
    return 0;
  }
  return Math.max(depth(root.left), depth(root.right)) + 1;
};

// Solution 2: bottom-up approach
const isBalanced = (root) => {
  return dfs(root) !== -1;
};

const dfs = (root) => {
  if (!root) {
    return 0;
  }
  const left = dfs(root.left);
  if (left === -1) {
    return -1;
  }
  const right = dfs(root.right);
  if (right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
};
