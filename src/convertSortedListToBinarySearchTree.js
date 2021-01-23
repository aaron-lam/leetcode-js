import { TreeNode } from "./TreeNode";

const sortedListToBST = (head) => {
  if (!head) {
    return null;
  }
  return toBST(head, null);
};

const toBST = (head, tail) => {
  if (head === tail) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast !== tail && fast.next !== tail) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const treeHead = new TreeNode(slow.val);
  treeHead.left = toBST(head, slow);
  treeHead.right = toBST(slow.next, tail);
  return treeHead;
};
