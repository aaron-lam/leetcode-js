// Solution 1: recursive
const inorderTraversal = (root) => {
  const res = [];
  inorder(root, res);
  return res;
};

const inorder = (root, res) => {
  if (root == null) {
    return;
  }
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
};

// Solution 2: iterative
const inorderTraversal = (root) => {
  const stack = [];
  const res = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res;
};
