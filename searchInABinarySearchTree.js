const searchBST = (root, val) => {
  if (!root) {
    return null;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  } else if (val === root.val) {
    return root;
  } else {
    return searchBST(root.right, val);
  }
};
