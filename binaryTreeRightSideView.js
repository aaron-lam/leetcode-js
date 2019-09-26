// BFS approach
const rightSideView = (root) => {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    const list = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (i === size - 1) {
        list.push(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(list);
  }
  return res;
};

// DFS approach
const rightSideView = (root) => {
  const res = [];
  traverse(root, res, 0);
  return res;
};

const traverse = (root, res, level) => {
  if (!root) {
    return;
  }
  if (level === res.length) {
    res.push(root.val);
  }
  traverse(root.right, res, level + 1);
  traverse(root.left, res, level + 1);
};
