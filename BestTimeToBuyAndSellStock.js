const maxProfit = (prices) => {
  if (!prices || prices.length < 2) {
    return 0;
  }
  let maxProfit = 0, minPrice = prices[0];
  prices.forEach((price, i) => {
    if (price > prices[i - 1]) {
      maxProfit = Math.max(maxProfit, price - minPrice);
    } else {
      minPrice = Math.min(minPrice, price);
    }
  });
  return maxProfit;
};
