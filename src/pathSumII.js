// recursive
const pathSumII = (root, sum) => {
  if (!root) {
    return [];
  }
  const res = [];
  traverse(root, sum, res, []);
  return res;
};

const traverse = (root, sum, res, cur) => {
  if (!root) {
    return;
  }
  cur.push(root.val);
  if (!root.left && !root.right && sum === root.val) {
    res.push([...cur]);
  }
  traverse(root.left, sum - root.val, res, cur);
  traverse(root.right, sum - root.val, res, cur);
  cur.pop();
};

// iterative
const pathSumII = (root, sum) => {
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [[root, sum, []]];
  while (queue.length) {
    const [node, val, list] = queue.shift();
    list.push(node.val);
    if (!node.left && !node.right && node.val === val) {
      res.push(list);
    }
    if (node.left) {
      queue.push([node.left, val - node.val, [...list]]);
    }
    if (node.right) {
      queue.push([node.right, val - node.val, [...list]]);
    }
  }
  return res;
};
