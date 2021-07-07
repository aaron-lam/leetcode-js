const toStack = (head) => {
  const stack = [];
  let cur = head;
  while (cur != null) {
    stack.push(cur.val);
    cur = cur.next;
  }
  return stack;
};

const isPalindrome = (head) => {
  if (head == null) {
    return true;
  }
  const stack = toStack(head);
  let cur = head;
  while (cur != null) {
    if (cur.val !== stack.pop()) {
      return false;
    }
    cur = cur.next;
  }
  return true;
};
