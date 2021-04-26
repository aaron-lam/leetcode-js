const canBeEqual = (target, arr) => {
  if (target == null || arr == null) {
    return target === arr;
  }
  if (target.length !== arr.length) {
    return false;
  }
  const map = new Map();
  for (let i = 0; i < target.length; i++) {
    if (!map.has(target[i])) {
      map.set(target[i], 0);
    }
    if (!map.has(arr[i])) {
      map.set(arr[i], 0);
    }
    map.set(target[i], map.get(target[i]) + 1);
    map.set(arr[i], map.get(arr[i]) - 1);
  }
  for (const [key, value] of map.entries()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};
