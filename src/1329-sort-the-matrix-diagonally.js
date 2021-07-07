import { MinPriorityQueue } from "@datastructures-js/priority-queue";

const diagonalSort = (mat) => {
  if (mat == null || mat.length === 0 || mat[0].length === 0) {
    return mat;
  }
  const m = mat.length, n = mat[0].length;
  const map = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!map.has(i - j)) {
        map.set(i - j, new MinPriorityQueue({ priority: (value) => value }));
      }
      map.get(i - j).enqueue(mat[i][j]);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      mat[i][j] = map.get(i - j).dequeue().element;
    }
  }
  return mat;
};
