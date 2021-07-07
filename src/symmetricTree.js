const isSymmetric = (root) => {
  if (!root) {
    return true;
  }
  return isMirror(root.left, root.right);
};

const isMirror = (p, q) => {
  if (!p || !q) {
    return p === q;
  }
  return p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left);
};

const isSymmetric = (root) => {
  if (!root) {
    return true;
  }
  const queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) {
      continue;
    }
    if (!left || !right || left.val !== right.val) {
      return false;
    }
    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
};
