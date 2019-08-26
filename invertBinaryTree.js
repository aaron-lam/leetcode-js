// recursive
const invertTree = (root) => {
  if (!root) {
    return null;
  }
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

// iterative
const invertTree = (root) => {
  if (!root) {
    return null;
  }
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
};
