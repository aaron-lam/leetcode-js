const canCompleteCircuit = (gas, cost) => {
  let start = 0,
    balance = 0,
    tank = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      balance += tank;
      tank = 0;
    }
  }
  return balance + tank < 0 ? -1 : start;
};
