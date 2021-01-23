// recursive, for frequently lookup
const kthSmallest = (root, k) => {
  const count = [];
  helper(root, count);
  return count[k - 1];
};

const helper = (node, count) => {
  if (!node) {
    return;
  }
  helper(node.left, count);
  count.push(node.val);
  helper(node.right, count);
};

// recursive, fastest
const kthSmallest = (root, k) => {
  if (!root) {
    return NaN;
  }
  const res = [k];
  helper(root, res);
  return res[1];
};

const helper = (node, res) => {
  if (node.left) {
    helper(node.left, res);
  }
  res[0] -= 1;
  if (!res[0]) {
    res.push(node.val);
    return;
  }
  if (node.right) {
    helper(node.right, res);
  }
};

// iterative
const kthSmallest = (root, k) => {
  const stack = [];
  while (root) {
    stack.push(root);
    root = root.left;
  }
  while (k && stack.length) {
    k -= 1;
    const n = stack.pop();
    if (!k) {
      return n.val;
    }
    let right = n.right;
    while (right) {
      stack.push(right);
      right = right.left;
    }
  }
  return -1;
};
