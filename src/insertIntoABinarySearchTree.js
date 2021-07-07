import TreeNode from "./data-strucutures/tree-node";

// recursive
const insertIntoBST = (root, val) => {
  if (!root) {
    return new TreeNode(val);
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};

// iterative
const insertIntoBST = (root, val) => {
  if (!root) {
    return null;
  }
  let cur = root;
  while (true) {
    if (cur.val < val) {
      if (cur.right) {
        cur = cur.right;
      } else {
        cur.right = new TreeNode(val);
        break;
      }
    } else {
      if (cur.left) {
        cur = cur.left;
      } else {
        cur.left = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};
