import PriorityQueue from "./data-structures/priority-queue";

const kthLargestNumber = (nums, k) => {
  const pq = new PriorityQueue((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return b[i] - a[i];
      }
    }
    return 0;
  });
  for (const num of nums) {
    pq.add(num);
    if (pq.size() > k) {
      pq.poll();
    }
  }
  return pq.poll();
};
