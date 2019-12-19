const preorder = (root) => {
  const res = [];

  const traverse = (root) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    for (const c of root.children) {
      traverse(c);
    }
    return res;
  };

  traverse(root);
  return res;
};
