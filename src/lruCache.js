class Node {
  constructor(key, value) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  addNode(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  deleteNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  moveToHead(node) {
    this.deleteNode(node);
    this.addNode(node);
  }

  popNode() {
    const last = this.tail.prev;
    this.deleteNode(last);
    return last;
  }

  constructor(maxSize) {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
    this.maxSize = maxSize;
    this.map = new Map();
  }

  put(key, value) {
    if (!this.map.has(key)) {
      const newNode = new Node(key, value);
      this.map.set(key, newNode);
      this.addNode(newNode);
      this.size += 1;
      if (this.size > this.maxSize) {
        const n = this.popNode();
        this.map.delete(n.key);
        this.size -= 1;
      }
    } else {
      const node = this.map.get(key);
      node.value = value;
      this.moveToHead(node);
    }
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);
    this.moveToHead(node);
    return node.value;
  }
}
