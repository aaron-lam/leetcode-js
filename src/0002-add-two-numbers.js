import { ListNode } from "./ListNode";

const getVal = (node) => node != null ? node.val : 0;

const getNext = (node) => node != null ? node.next : null;

const addTwoNumbers = (l1, l2) => {
  const dummy = new ListNode();
  let cur = dummy;
  let carry = 0;
  while (l1 != null || l2 != null || carry !== 0) {
    const sum = carry + getVal(l1) + getVal(l2);
    cur.next = new ListNode(sum % 10);
    carry = Math.trunc(sum / 10);
    l1 = getNext(l1);
    l2 = getNext(l2);
    cur = cur.next;
  }
  return dummy.next;
};
