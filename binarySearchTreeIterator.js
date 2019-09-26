class BSTIterator {

  constructor(root) {
    this.stack = [];
    this.pushAll(root);
  }

  next() {
    const tempNode = this.stack.pop();
    this.pushAll(tempNode.right);
    return tempNode.val;
  }

  hasNext() {
    return this.stack.length;
  }

  pushAll(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }
}
