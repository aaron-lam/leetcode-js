const maxProfit = (prices) => {
  let lowest = prices[0];
  let res = 0;
  for (const price of prices) {
    res = Math.max(res, price - lowest);
    lowest = Math.min(lowest, price);
  }
  return res;
};
