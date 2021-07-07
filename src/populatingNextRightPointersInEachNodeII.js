class Node {
  constructor(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

const connect = (root) => {
  if (!root) {
    return root;
  }
  let node = root;
  while (node) {
    let dummy = new Node();
    let cur = dummy;
    while (node) {
      if (node.left) {
        cur.next = node.left;
        cur = cur.next;
      }
      if (node.right) {
        cur.next = node.right;
        cur = cur.next;
      }
      node = node.next;
    }
    node = dummy.next;
  }
  return root;
};
