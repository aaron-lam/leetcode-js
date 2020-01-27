function hasCycle(head) {
  if (head == null) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
}
