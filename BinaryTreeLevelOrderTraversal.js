// BFS approach
const levelOrder = (root) => {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    const list = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      list.push(node.val);
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
const levelOrder = (root) => {
  const res = [];
  levelTraverse(root, res, 0);
  return res;
};

const levelTraverse = (node, res, level) => {
  if (!node) {
    return;
  }
  res[level] = res[level] || [];
  res[level].push(node.val);
  levelTraverse(node.left, res, level + 1);
  levelTraverse(node.right, res, level + 1);
};
