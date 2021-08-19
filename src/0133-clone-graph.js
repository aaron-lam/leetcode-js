class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

// dfs
const cloneGraph = (node) => {
  if (node == null) {
    return null;
  }
  const map = new Map();
  return dfs(node, map);
};

const dfs = (node, map) => {
  if (map.has(node.val)) {
    return map.get(node.val);
  }
  const clonedNode = new Node(node.val);
  map.set(clonedNode.val, clonedNode);
  for (const neighbor of node.neighbors) {
    clonedNode.neighbors.push(dfs(neighbor, map));
  }
  return clonedNode;
}

// bfs
const cloneGraph = (node) => {
  if (node == null) {
    return null;
  }
  const map = new Map();
  const clonedNode = new Node(node.val);
  map.set(node, clonedNode);
  const queue = [node];
  while (queue.length > 0) {
    const curNode = queue.pop();
    for (const neighbor of curNode.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val));
        queue.unshift(neighbor);
      }
      map.get(curNode).neighbors.push(map.get(neighbor));
    }
  }
  return clonedNode;
};
