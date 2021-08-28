const angleClock = (hour, minutes) => {
  const h = (hour % 12 * 30) + (minutes / 60 * 30);
  const m = minutes * 6;
  const angle = Math.abs(m - h);
  return angle > 180 ? 360 - angle : angle;
};
