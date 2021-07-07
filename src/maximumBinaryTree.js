import TreeNode from "./data-strucutures/tree-node";

const constructMaximumBinaryTree = (nums) => {
  if (!nums || !nums.length) {
    return null;
  }
  return traverse(nums, 0, nums.length - 1);
};

const traverse = (nums, start, end) => {
  if (start > end) {
    return null;
  }
  const maxIdx = getMax(nums, start, end);
  const root = new TreeNode(nums[maxIdx]);
  root.left = traverse(nums, start, maxIdx - 1);
  root.right = traverse(nums, maxIdx + 1, end);
  return root;
};

const getMax = (nums, start, end) => {
  let max = Number.NEGATIVE_INFINITY;
  let idx = -1;
  for (let i = start; i <= end; i++) {
    if (nums[i] > max) {
      idx = i;
    }
    max = Math.max(max, nums[i]);
  }
  return idx;
};
