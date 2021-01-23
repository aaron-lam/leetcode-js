const findDuplicate = (paths) => {
  if (!paths || !paths.length) {
    return [];
  }
  const res = [];
  const map = new Map();
  for (const path of paths) {
    const arr = path.split(" ");
    const dir = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const file = arr[i];
      const idx = file.indexOf("(");
      const filePath = dir + "/" + file.substring(0, idx);
      const content = file.substring(idx);
      const set = map.get(content) || new Set();
      set.add(filePath);
      map.set(content, set);
    }
  }
  for (const key of map.keys()) {
    if (map.get(key).size > 1) {
      res.push([...map.get(key)]);
    }
  }
  return res;
};
