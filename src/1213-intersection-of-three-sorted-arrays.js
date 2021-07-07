// Solution 1: Hash Set
const arraysIntersection = (arr1, arr2, arr3) => {
  const set2 = new Set([...arr2]);
  const set3 = new Set([...arr3]);
  const res = [];
  for (const num of arr1) {
    if (set2.has(num) && set3.has(num)) {
      res.push(num);
    }
  }
  return res;
};

// Solution 2:
const arraysIntersection = (arr1, arr2, arr3) => {
  let i1 = 0,
    i2 = 0,
    i3 = 0;
  const res = [];
  while (i1 < arr1.length && i2 < arr2.length && i3 < arr3.length) {
    if (arr1[i1] === arr2[i2] && arr2[i2] === arr3[i3]) {
      res.push(arr1[i1]);
      i1 += 1;
      i2 += 1;
      i3 += 1;
    } else if (arr1[i1] < arr2[i2]) {
      i1 += 1;
    } else if (arr2[i2] < arr3[i3]) {
      i2 += 1;
    } else {
      i3 += 1;
    }
  }
  return res;
};
