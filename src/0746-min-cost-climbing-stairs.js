const minCostClimbingStairs = function (cost) {
  let twoStepsBackCost = 0;
  let oneStepBackCost = 0;
  for (let i = 2; i <= cost.length; i++) {
    const curCheapestCost = Math.min(twoStepsBackCost + cost[i - 2], oneStepBackCost + cost[i - 1]);
    twoStepsBackCost = oneStepBackCost;
    oneStepBackCost = curCheapestCost;
  }
  return oneStepBackCost;
};
