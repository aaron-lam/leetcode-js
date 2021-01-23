// BFS approach
const zigzagLevelOrder = (root) => {
  const res = [];
  if (!root) {
    return res;
  }
  const queue = [];
  queue.push(root);
  let level = 0;
  while (queue.length) {
    const size = queue.length;
    const subList = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (level % 2 === 0) {
        subList.push(node.val);
      } else {
        subList.unshift(node.val);
      }
    }
    res.push(subList);
    level += 1;
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
    res[res.length - 1].push(root.val);
  } else {
    res[res.length - 1].unshift(root.val);
  }
};
