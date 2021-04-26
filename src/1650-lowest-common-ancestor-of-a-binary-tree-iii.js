// Solution 1: Simple Traverse
const lowestCommonAncestor = (p, q) => {
  const path = new Set();
  while (p.parent != null) {
    path.add(p);
    p = p.parent;
  }
  while (q.parent != null) {
    if (path.has(q)) {
      return q;
    }
    q = q.parent;
  }
  return q;
};

// Solution 2: Cycle
const lowestCommonAncestor = (p, q) => {
  let pCur = p, qCur = q;
  while (pCur !== qCur) {
    pCur = pCur == null ? q : pCur.parent;
    qCur = qCur == null ? p : qCur.parent;
  }
  return pCur;
};
