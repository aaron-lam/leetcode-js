// Solution 1
const arraysIntersection = (arr1, arr2, arr3) => {
  const res = [];
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;
  while (index1 < arr1.length && index2 < arr2.length && index3 < arr3.length) {
    const min = Math.min(arr1[index1], arr2[index2], arr3[index3]);
    if (arr1[index1] === arr2[index2] && arr2[index2] === arr3[index3]) {
      res.push(min);
    }
    if (arr1[index1] === min) {
      index1 += 1;
    }
    if (arr2[index2] === min) {
      index2 += 1;
    }
    if (arr3[index3] === min) {
      index3 += 1;
    }
  }
  return res;
};
