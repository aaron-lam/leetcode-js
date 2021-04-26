const findSpecialInteger = (arr) => {
  if (arr == null || arr.length === 0) {
    return 0;
  }
  const window = Math.floor(arr.length / 4);
  for (let i = 0; i + window < arr.length; i++) {
    if (arr[i] === arr[i + window]) {
      return arr[i];
    }
  }
  return null;
};
