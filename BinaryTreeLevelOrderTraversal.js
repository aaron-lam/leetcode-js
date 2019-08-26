// recursive
const levelOrder = (root) => {
  const res = [];
  preOrder(root, res, 0);
  return res;
};

const preOrder = (node, res, level) => {
  if (!node) {
    return;
  }
  res[level] = res[level] || [];
  res[level].push(node.val);
  preOrder(node.left, res, level + 1);
  preOrder(node.right, res, level + 1);
};

// iterative
const levelOrder = (root) => {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    const list = [];
    while (len) {
      const node = queue.shift();
      list.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      len -= 1;
    }
    res.push(list);
  }
  return res;
};
