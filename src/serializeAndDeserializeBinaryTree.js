import { TreeNode } from "./TreeNode";

const serialize = (root) => {
  if (!root) {
    return "";
  }
  const q = [root];
  let res = "";
  while (q.length) {
    const node = q.shift();
    if (!node) {
      res += "x ";
    } else {
      res += node.val + " ";
      q.push(node.left);
      q.push(node.right);
    }
  }
  return res.substring(0, res.length - 1);
};

const deserialize = (data) => {
  if (!data || !data.length) {
    return null;
  }
  const values = data.split(" ");
  const root = new TreeNode(Number(values[0]));
  const q = [root];
  for (let i = 1; i < values.length; i++) {
    let parent = q.shift();
    if (values[i] !== "x") {
      const left = new TreeNode(Number(values[i]));
      parent.left = left;
      q.push(left);
    }
    i += 1;
    if (values[i] !== "x") {
      const right = new TreeNode(Number(values[i]));
      parent.right = right;
      q.push(right);
    }
  }
  return root;
};
