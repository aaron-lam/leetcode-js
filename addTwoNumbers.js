import { ListNode } from "./ListNode";

const addTwoNumbers = (l1, l2) => {
  let List = new ListNode(0);
  let head = List;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = carry;
    sum += (l1) ? l1.val : 0;
    sum += (l2) ? l2.val : 0;
    head.next = new ListNode(sum % 10);
    carry = (sum / 10) | 0;
    l1 = (l1) ? l1.next : l1;
    l2 = (l2) ? l2.next : l2;
    head = head.next;
  }
  return List.next;
};
