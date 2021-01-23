const postorder = (root) => {
  const res = [];
  const traverse = (root) => {
    if (!root) {
      return;
    }
    for (const c of root.children) {
      traverse(c);
    }
    res.push(root.val);
    return res;
  }
  traverse(root);
  return res;
};
