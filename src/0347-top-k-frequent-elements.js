import { MinPriorityQueue } from '@datastructures-js/priority-queue';

const topKFrequent = (nums, k) => {
  const pq = new MinPriorityQueue({ priority: (entry) => entry[1] });
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  for (const entry of map.entries()) {
    pq.enqueue(entry);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.toArray().map((item) => item.element[0]);
};
