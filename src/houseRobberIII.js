// brute-force
const rob = (root) => {
  if (!root) {
    return 0;
  }
  let val = 0;
  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right);
  }
  return Math.max(val + root.val, rob(root.left) + rob(root.right));
};
