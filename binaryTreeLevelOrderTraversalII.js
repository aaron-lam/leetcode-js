// BFS approach
const levelOrderBottom = (root) => {
  const queue = [];
  const res = [];
  if (!root) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const levelNum = queue.length;
    const subList = [];
    for (let i = 0; i < levelNum; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      subList.push(node.val);
    }
    res.unshift(subList);
  }
  return res;
};

// DFS approach
const zigzagLevelOrder = (root) => {
  const res = [];
  levelTraverse(res, root, 0);
  return res;
};

const levelTraverse = (res, root, level) => {
  if (!root) {
    return;
  }
  res[level] = res[level] || [];
  levelTraverse(res, root.left, level + 1);
  levelTraverse(res, root.right, level + 1);
  if (level % 2 === 0) {
    res[level].push(root.val);
  } else {
    res[level].unshift(root.val);
  }
};
