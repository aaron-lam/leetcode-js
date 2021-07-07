const minEatingSpeed = (piles, H) => {
  let start = 1,
    end = getMaxPile(piles);
  while (start <= end) {
    const mid = Math.trunc((end - start) / 2) + start;
    if (canEatAll(piles, H, mid)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const canEatAll = (piles, H, k) => {
  let countHour = 0;
  for (const pile of piles) {
    countHour += Math.trunc(piles / k);
    if (piles % k !== 0) {
      countHour += 1;
    }
  }
  return countHour <= H;
};

const getMaxPile = (piles) => {
  return Math.max.apply(Math, piles);
};
