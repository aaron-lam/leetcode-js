// BFS approach
const levelOrder = function(root) {
  if (root == null) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    const list = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      list.push(node.val);
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
    res.push(list);
  }
  return res;
};

// DFS approach
const levelOrder = function(root) {
  const res = [];
  dfs(root, res, 0);
  return res;
};

const dfs = (root, res, index) => {
  if (root == null) {
    return;
  }
  if (res.length === index) {
    res.push([]);
  }
  res[index].push(root.val);
  dfs(root.left, res, index + 1);
  dfs(root.right, res, index + 1);
};
