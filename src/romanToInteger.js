const romanToInt = (s) => {
  if (!s || !s.length) {
    return 0;
  }
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const curChar = s.charAt(i);
    const lastChar = s.charAt(i - 1);
    num += map[curChar];
    if (i && map[lastChar] < map[curChar]) {
      num -= map[lastChar] * 2;
    }
  }
  return num;
};
