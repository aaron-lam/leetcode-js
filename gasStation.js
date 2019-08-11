const canCompleteCircuit = (gas, cost) => {
  if (!gas || !cost || gas.length !== cost.length) {
    return -1;
  }
  let start = 0, total = 0, tank = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total += tank;
      tank = 0;
    }
  }
  return (total + tank < 0) ? -1 : start;
};
