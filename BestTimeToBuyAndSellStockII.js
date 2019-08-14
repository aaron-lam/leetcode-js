const maxProfit = (prices) => {
  if (!prices || prices.length < 2) {
    return 0;
  }
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }
  return maxProfit;
};
