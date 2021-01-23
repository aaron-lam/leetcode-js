function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }
  let cur = head;
  let newHead = head.next;
  while (cur && cur.next) {
    let temp = cur; // save 1st element as temp
    cur = cur.next; // cur jumps to 2nd element
    temp.next = cur.next; // 1st element's next pointer points to 3rd element
    cur.next = temp; // 2nd's elements next pointer points to 1st element
    cur = temp.next; // set cur pointer to correct direction
    if (cur && cur.next) {
      temp.next = cur.next; // if still has element, then set temp pointer to correct position
    }
  }
  return newHead;
}
