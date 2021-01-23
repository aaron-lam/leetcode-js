import { ListNode } from "./ListNode";

const addTwoNumbers = (l1, l2) => {
  const res = new ListNode();
  let cur = res;
  let carry = 0;
  while (l1 !== 0 || l2 !== 0 || carry !== 0) {
    let sum = carry;
    sum += l1 ? l1.val : 0;
    sum += l2 ? l2.val : 0;
    cur.next = new ListNode(sum % 10);
    carry = Math.trunc(sum / 10);
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
    cur = cur.next;
  }
  return res.next;
};
