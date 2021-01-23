const copyRandomList = (head) => {
  if (!head) {
    return null;
  }
  let node = head;
  const map = new Map();
  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }
  for (let n of map.keys()) {
    map.get(n).next = n.next ? map.get(n.next) : null;
    map.get(n).random = n.random ? map.get(n.random) : null;
  }
  return map.get(head);
};
