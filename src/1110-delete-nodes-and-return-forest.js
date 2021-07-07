const delNodes = (root, toDelete) => {
  if (root == null) {
    return [];
  }
  const deleteSet = new Set(toDelete);
  const res = [];
  traverse(root, res, deleteSet, true);
  return res;
};

const traverse = (root, res, deleteSet, isRoot) => {
  if (root == null) {
    return null;
  }
  const shouldDelete = deleteSet.has(root.val);
  if (isRoot && !shouldDelete) {
    res.push(root);
  }
  root.left = traverse(root.left, res, deleteSet, shouldDelete);
  root.right = traverse(root.right, res, deleteSet, shouldDelete);
  return shouldDelete ? null : root;
};
