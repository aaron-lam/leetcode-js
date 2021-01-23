// BFS approach
const levelOrderBottom = (root) => {
  if (root == null) {
    return [];
  }
  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length > 0) {
    const levelNum = queue.length;
    const subList = [];
    for (let i = 0; i < levelNum; i++) {
      const node = queue.shift();
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
      subList.push(node.val);
    }
    res.unshift(subList);
  }
  return res;
};

// DFS approach
const levelOrderBottom = (root) => {
  const res = [];
  levelTraverse(res, root, 0);
  return res;
};

const levelTraverse = (res, root, level) => {
  if (root == null) {
    return;
  }
  res[level] = res[level] ?? [];
  levelTraverse(res, root.left, level + 1);
  levelTraverse(res, root.right, level + 1);
  res[level].push(root.val);
};
