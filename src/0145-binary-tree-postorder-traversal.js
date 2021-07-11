// recursive
const postorderTraversal = (root) => {
  const res = [];
  postorder(root, res);
  return res;
};

const postorder = (root, res) => {
  if (!root) {
    return;
  }
  postorder(root.left, res);
  postorder(root.right, res);
  res.push(root.val);
};
