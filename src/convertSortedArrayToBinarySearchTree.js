import { TreeNode } from "./TreeNode";

// recursive
const sortedArrayToBST = (nums) => {
  if (!nums || !nums.length) {
    return null;
  }
  return helper(nums, 0, nums.length - 1);
};

const helper = (nums, start, end) => {
  if (start < end) {
    return null;
  }
  const mid = Math.floor((end - start) / 2) + start;
  const node = new TreeNode(nums[mid]);
  node.left = helper(nums, 0, mid - 1);
  node.right = helper(nums, mid + 1, end);
  return node;
};

// iterative
const sortedArrayToBST = (nums) => {
  if (!nums || !nums.length) {
    return null;
  }
  const n = nums.length;
  const root = new TreeNode(0);
  const nodeStack = [root];
  const leftIdxStack = [0];
  const rightIdxStack = [n - 1];
  while (nodeStack.length) {
    const curNode = nodeStack.pop();
    const left = leftIdxStack.pop();
    const right = rightIdxStack.pop();
    const mid = Math.floor((right - left) / 2) + left;
    curNode.val = nums[mid];
    if (left <= mid - 1) {
      curNode.left = new TreeNode(0);
      nodeStack.push(curNode.left);
      leftIdxStack.push(left);
      rightIdxStack.push(mid - 1);
    }
    if (mid + 1 <= right) {
      curNode.right = new TreeNode(0);
      nodeStack.push(curNode.right);
      leftIdxStack.push(mid + 1);
      rightIdxStack.push(right);
    }
  }
  return root;
};
