// Solution: BFS
const isBipartite = (graph) => {
  const colors = new Array(graph.length).fill(-1);
  for (let node = 0; node < graph.length; node++) {
    if (graph[node].length > 0 && colors[node] === -1) {
      const queue = [node];
      colors[node] = 0;
      while (queue.length > 0) {
        const curNode = queue.pop();
        for (const neighbor of graph[curNode]) {
          if (colors[neighbor] === -1) {
            colors[neighbor] = 1 - colors[curNode];
            queue.unshift(neighbor);
          } else if (colors[neighbor] === colors[curNode]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

// Solution: DFS
const isBipartite = (graph) => {
  const colors = new Array(graph.length).fill(-1);
  for (let node = 0; node < graph.length; node++) {
    if (colors[node] === -1 && !validColor(graph, colors, 0, node)) {
      return false;
    }
  }
  return true;
};

const validColor = (graph, colors, curColor, node) => {
  if (colors[node] !== -1) {
    return colors[node] === curColor;
  }
  colors[node] = curColor;
  for (const neighbor of graph[node]) {
    if (!validColor(graph, colors, 1 - curColor, neighbor)) {
      return false;
    }
  }
  return true;
}
