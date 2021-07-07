const rightSideView = (root) => {
  const lists = [];
  traverse(root, lists, 0);
  return lists.map((list) => list[list.length - 1]);
};

const traverse = (root, lists, depth) => {
  if (root == null) {
    return;
  }
  if (lists[depth] == null) {
    lists[depth] = [];
  }
  lists[depth].push(root.val);
  traverse(root.left, lists, depth + 1);
  traverse(root.right, lists, depth + 1);
};
