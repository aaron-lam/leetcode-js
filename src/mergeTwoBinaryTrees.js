const mergeTrees = (t1, t2) => {
  if (!t1 && !t2) {
    return null;
  }
  let sum = (t1) ? t1.val : 0;
  sum += (t2) ? t2.val : 0;
  const root = new TreeNode(sum);
  const t1Left = t1 ? t1.left : null;
  const t1Right = t1 ? t1.right : null;
  const t2Left = t2 ? t2.left : null;
  const t2Right = t2 ? t2.right : null;
  root.left = mergeTrees(t1Left, t2Left);
  root.right = mergeTrees(t1Right, t2Right);
  return root;
};
