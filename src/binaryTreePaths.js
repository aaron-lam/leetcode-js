// recursive
const binaryTreePaths = (root) => {
  if (!root) {
    return [];
  }
  const res = [];
  traverse(root, res, "");
  return res;
};

const traverse = (root, res, str) => {
  if (!root.left && !root.right) {
    res.push(str + root.val);
  }
  if (root.left) {
    traverse(root.left, res, str + root.val + "->");
  }
  if (root.right) {
    traverse(root.right, res, str + root.val + "->");
  }
};

// iterative
const hasPathSum = (root, sum) => {
  if (!root) {
    return false;
  }
  const queue = [[root, sum]];
  while (queue.length) {
    const [node, val] = queue.shift();
    if (!node.left && !node.right && val === node.val) {
      return true;
    }
    if (node.left) {
      queue.push([node.left, val - node.val]);
    }
    if (node.right) {
      queue.push([node.right, val - node.val]);
    }
  }
  return false;
};
