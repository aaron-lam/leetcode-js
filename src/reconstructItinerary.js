class PriorityQueue {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  add(val) {
    return this.data.push(val);
  }

  poll() {
    let index = 0;
    let min = "ZZZ";
    for (let i = 0; i < this.data.length; i++) {
      if (this.compare(min, this.data[i]) > 0) {
        min = this.data[i];
        index = i;
      }
    }
    return this.data.splice(index, 1)[0];
  }

  size() {
    return this.data.length;
  }
}

const findItinerary = (tickets) => {
  if (!tickets || !tickets.length) {
    return [];
  }
  const res = [];
  const map = new Map();
  for (const ticket of tickets) {
    const from = ticket[0];
    const to = ticket[1];
    const pq = map.get(from) || new PriorityQueue((a, b) => a.localeCompare(b));
    pq.add(to);
    map.set(from, pq);
  }

  const dfs = (from) => {
    const to = map.get(from);
    while (to && to.size()) {
      dfs(to.poll());
    }
    res.unshift(from);
  };

  dfs("JFK");
  return res;
};
