// BFS approach
const levelOrder = (root) => {
  if (root == null) {
    return [];
  }
  const res = [];
  const q = [root];
  while (q.length > 0) {
    const list = [];
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      list.push(node.val);
      if (node.left != null) {
        q.push(node.left);
      }
      if (node.right != null) {
        q.push(node.right);
      }
    }
    res.push(list);
  }
  return res;
};

// DFS approach
const levelOrder = (root) => {
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
