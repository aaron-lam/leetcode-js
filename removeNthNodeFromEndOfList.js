import { ListNode } from "./ListNode";

const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy, fast = dummy;
  for (let i = 0; i <= n; i++) {
    if (fast === null) {
      return null;
    }
    fast = fast.next;
  }
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
