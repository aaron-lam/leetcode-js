const minimizeTheDifference = (mat, target) => {
  let possibleSums = new Set([0]);
  for (let i = 0; i < mat.length; i++) {
    const nextPossibleSums = new Set();
    let greater = -1;
    for (const sum of possibleSums) {
      for (let j = 0; j < mat[0].length; j++) {
        const newSum = sum + mat[i][j];
        if (newSum < target) {
          nextPossibleSums.add(newSum);
        } else {
          if (greater === -1 || newSum < greater) {
            greater = newSum;
          }
        }
      }
    }
    if (greater !== -1) {
      nextPossibleSums.add(greater);
    }
    possibleSums = nextPossibleSums;
  }
  let res = Infinity;
  for (const sum of possibleSums) {
    res = Math.min(res, Math.abs(sum - target));
  }
  return res;
};
