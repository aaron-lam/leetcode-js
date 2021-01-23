class Node {

  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

const cloneGraph = (node) => {

  const clone = (node) => {
    if (!node) {
      return null;
    }
    if (map[node.val] !== undefined) {
      return map[node.val];
    }
    let clonedNode = new Node(node.val, []);
    map[clonedNode.val] = clonedNode;
    for (const neighbor of node.neighbors) {
      clonedNode.neighbors.push(clone(neighbor));
    }
    return clonedNode;
  };

  const map = {};
  return clone(node);
};
