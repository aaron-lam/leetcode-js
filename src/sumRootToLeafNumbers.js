// recursive
const sumNumbers = (root) => {
  return traverse(root, 0);
};

const traverse = (root, sum) => {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return sum * 10 + root.val;
  }
  return traverse(root.left, sum * 10 + root.val) + traverse(root.right, sum * 10 + root.val);
};

// iterative bfs
const sumNumbers = (root) => {
  if (!root) {
    return 0;
  }
  let sum = 0;
  const queue = [[root, 0]];
  while (queue.length) {
    const [node, val] = queue.shift();
    if (!node.left && !node.right) {
      sum += val * 10 + node.val;
      continue;
    }
    if (node.left) {
      queue.push([node.left, val * 10 + node.val]);
    }
    if (node.right) {
      queue.push([node.right, val * 10 + node.val]);
    }
  }
  return sum;
};

// iterative dfs
const sumNumbers = (root) => {
  if (!root) {
    return 0;
  }
  let sum = 0;
  const stack = [[root, 0]];
  while (stack.length) {
    const [node, val] = stack.pop();
    if (!node.left && !node.right) {
      sum += val * 10 + node.val;
      continue;
    }
    if (node.right) {
      stack.push([node.right, val * 10 + node.val]);
    }
    if (node.left) {
      stack.push([node.left, val * 10 + node.val]);
    }
  }
  return sum;
};
