const climbStairs = (n) => {
  if (n <= 2) {
    return n;
  }
  let oneStepBackCounts = 1;
  let twoStepsBackCounts = 1;
  for (let i = 1; i < n; i++) {
    const totalCounts = oneStepBackCounts + twoStepsBackCounts;
    oneStepBackCounts = twoStepsBackCounts;
    twoStepsBackCounts = totalCounts;
  }
  return twoStepsBackCounts;
};
