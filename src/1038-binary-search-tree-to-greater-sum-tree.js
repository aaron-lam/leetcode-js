const bstToGst = (root) => {
  let pre = 0;

  const traverse = (node) => {
    if (!node) {
      return;
    }
    traverse(node.right);
    node.val += pre;
    pre = node.val;
    traverse(node.left);
  };

  traverse(root);
  return root;
};
