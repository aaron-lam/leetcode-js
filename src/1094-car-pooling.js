const carPooling = (trips, capacity) => {
  const map = new Map();
  for (const trip of trips) {
    const [passengerCount, from, to] = trip;
    for (let i = from; i < to; i++) {
      map.set(i, passengerCount + (map.get(i) ?? 0));
      if (map.get(i) > capacity) {
        return false;
      }
    }
  }
  return true;
};
