import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

const rearrangeString = (s, k) => {
  const res = [];
  const map = new Map();
  for (const c of s.split("")) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  const pq = new MaxPriorityQueue({ priority: (entry) => entry[1] });
  const waitQueue = [];
  for (const entry of map.entries()) {
    pq.enqueue(entry);
  }
  while (pq.size() > 0) {
    const cur = pq.dequeue().element;
    res.push(cur[0]);
    cur[1] -= 1;
    waitQueue.unshift(cur);
    if (waitQueue.length < k) {
      continue;
    }
    const front = waitQueue.pop();
    if (front[1] > 0) {
      pq.enqueue(front);
    }
  }
  return res.length === s.length ? res.join("") : "";
};
