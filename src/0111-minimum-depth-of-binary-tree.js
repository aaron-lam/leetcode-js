// Solution 1: recursive
const minDepth = (root) => {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// Solution 2: iterative (BFS)
const minDepth = (root) => {
  if (root == null) {
    return 0;
  }
  const queue = [root];
  let depth = 1;
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      if (node.left == null && node.right == null) {
        return depth;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth += 1;
  }
  return depth;
};

// Solution 3: iterative BFS (approach 2)
const minDepth = (root) => {
  if (root == null) {
      return 0;
  }
  const q = [[root, 0]];
  let res = 0;
  while (q.length > 0) {
      const [node, curDepth] = q.shift();
      if (node.left == null && node.right == null) {
          return curDepth + 1;
      }
      if (node.left != null) {
          q.push([node.left, curDepth + 1]);
      }
      if (node.right != null) {
          q.push([node.right, curDepth + 1]);
      }
  }
  return res;
};
