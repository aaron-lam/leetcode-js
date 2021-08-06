const maxProfit = (prices) => {
  let res = 0;
  let lowestBuyPrice = prices[0];
  for (const price of prices) {
    lowestBuyPrice = Math.min(lowestBuyPrice, price);
    res = Math.max(res, price - lowestBuyPrice);
  }
  return res;
};