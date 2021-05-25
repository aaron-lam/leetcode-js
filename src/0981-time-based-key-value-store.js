class TimeMap {
  constructor() {
    this.map = new Map();
  }
  
  set(key, value, timestamp) {
    const entry = { 
      timestamp,
      value,
    }
    if (this.map.has(key)) {
      this.map.get(key).push(entry);
    } else {
      this.map.set(key, [entry]);
    }
  }
  
  get (key, timestamp) {
    if (!this.map.has(key)) {
      return "";
    }
    return this.binarySearch(this.map.get(key), timestamp);
  }
  
  binarySearch(list, timestamp) {
    if (list.length === 1) {
      return list[0].value;
    }
    let start = 0, end = list.length;
    while (start < end) {
      const mid = Math.floor((end - start) / 2) + start;
      if (timestamp === list[mid].timstamp) {
        return list[mid].value;
      }
      if (timestamp < list[mid].timestamp) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return list[end - 1]?.value ?? "";
  }
}
