// iterative
function reverseList(head) {
  let newHead = null;
  while (head != null) {
    const next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
}

// recursive
function reverseList(head) {
  return reverse(head, null);
}

function reverse(head, newHead) {
  if (head == null) {
    return newHead;
  }
  const next = head.next;
  head.next = newHead;
  return reverse(next, head);
}
