const copyRandomList = (head) => {
  const map = new Map();
  for (let cur = head; cur != null; cur = cur.next) {
    map.set(cur, new Node(cur.val));
  }
  for (let cur = head; cur != null; cur = cur.next) {
    const newNode = map.get(cur);
    newNode.next = map.get(cur.next) ?? null;
    newNode.random = map.get(cur.random) ?? null;
  }
  return map.get(head);
};
