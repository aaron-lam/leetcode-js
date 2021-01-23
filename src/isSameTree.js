// recursive
const isSameTree = (p, q) => {
  if (!p || !q) {
    return p === q;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// iterative
const isSameTree = (p, q) => {
  const queue = [];
  queue.push(p);
  queue.push(q);
  while (queue.length) {
    p = queue.shift();
    q = queue.shift();
    if (!p && !q) {
      continue;
    } else if (!p || !q || p.val !== q.val) {
      return false;
    } else {
      queue.push(p.left);
      queue.push(q.left);
      queue.push(p.right);
      queue.push(q.right);
    }
  }
  return true;
};
