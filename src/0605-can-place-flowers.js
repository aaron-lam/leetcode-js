const isEmpty = (flowerbed, i) => i === -1 || i === flowerbed.length || flowerbed[i] === 0;

const canPlaceFlowers = (flowerbed, n) => {
  let i = 0;
  while (i < flowerbed.length && n > 0) {
    if (flowerbed[i] === 0 && isEmpty(flowerbed, i - 1) && isEmpty(flowerbed, i + 1)) {
      flowerbed[i] = 1;
      n -= 1;
    }
    i += 1;
  }
  return n === 0;
};
