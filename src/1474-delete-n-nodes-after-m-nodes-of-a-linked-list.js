import ListNode from "./data-strucutures/node";

const moveTo = (node, steps) => {
  for (let i = 0; i < steps && node != null; i++) {
    node = node.next;
  }
  return node;
};

const deleteNodes = (head, m, n) => {
  if (head == null || m <= 0 || n <= 0) {
    return null;
  }
  const dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;
  while (cur != null) {
    cur = moveTo(cur, m);
    if (cur == null) {
      return head;
    }
    cur.next = moveTo(cur.next, n);
  }
  return dummy.next;
};
