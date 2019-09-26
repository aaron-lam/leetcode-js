const findLadders = (start, end, wordList) => {
  const dict = new Set(wordList);
  const res = [];
  const nodeNeighbors = {};
  const distance = {};
  const solution = [];
  dict.add(start);

  const bfs = (start, end) => {
    for (const str of dict) {
      nodeNeighbors[str] = [];
    }
    const queue = [];
    queue.unshift(start);
    distance[start] = 0;
    while (queue.length) {
      let foundEnd = false;
      for (let i = 0; i < queue.length; i++) {
        const cur = queue.pop();
        const curDistance = distance[cur];
        const neighbors = getNeighbors(cur);
        for (const neighbor of neighbors) {
          nodeNeighbors[cur].add(neighbor);
          if (distance[neighbor] !== undefined) {
            distance[neighbor] = curDistance + 1;
            if (end === neighbor) {
              foundEnd = true;
            } else {
              queue.unshift(neighbor);
            }
          }
        }
        if (foundEnd) {
          break;
        }
      }
    }
  };

  const getNeighbors = (node) => {
    const res = [];
    const chs = node.split("");
    for (let i = 0; i < chs.length; i++) {
      for (let c = 0; c < 26; c++) {
        if (chs[i] === c) {
          continue;
        }
        const old = chs[i];
        chs[i] = String.fromCharCode(97 + c);
        const target = chs.join("");
        if (dict.has(target)) {
          res.push(target);
        }
        chs[i] = old;
      }
    }
    return res;
  };

  const dfs = (cur, end) => {
    solution.push(cur);
    if (end === cur) {
      res.push([...solution]);
    } else {
      for (const next of nodeNeighbors[cur]) {
        if (distance[next] === distance[cur] + 1) {
          dfs(next, end);
        }
      }
    }
    solution.pop();
  };

  bfs(start, end);
  dfs(start, end);
  return res;
};
