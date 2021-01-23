const bstFromPreorder = (preorder) => {
  let i = 0;

  const traverse = (bound) => {
    if (i === preorder.length || preorder[i] > bound) {
      return null;
    }
    const root = new TreeNode(preorder[i++]);
    root.left = traverse(root.val);
    root.right = traverse(bound);
    return root;
  };

  return traverse(Number.POSITIVE_INFINITY);
};
