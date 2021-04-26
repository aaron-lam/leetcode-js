const balanceBST = (root) => {
  if (root == null) {
    return null;
  }
  const list = [];
  traverse(root, list);
  return sortedListToBST(list, 0, list.length - 1);
};

const traverse = (root, list) => {
  if (root == null) {
    return;
  }
  traverse(root.left, list);
  list.push(root.val);
  traverse(root.right, list);
}

const sortedListToBST = (list, start, end) => {
  if (start > end) {
    return null;
  }
  const mid = Math.floor((end - start) / 2) + start;
  const root = new TreeNode(list[mid]);
  root.left = sortedListToBST(list, start, mid - 1);
  root.right = sortedListToBST(list, mid + 1, end);
  return root;
}
