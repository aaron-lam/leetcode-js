// recursive
const preorderTraversal = (root) => {
  const res = [];
  preorder(root, res);
  return res;
};

const preorder = (root, res) => {
  if (!root) {
    return;
  }
  res.add(root.val);
  preorder(root.left, res);
  preorder(root.right, res)
};

// iterative
const preorderTraversal = (root) => {
  const res = [];
  if (!root) {
    return res;
  }
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return res;
};
