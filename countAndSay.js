const countAndSay = (n) => {
  if (n <= 0) {
    return "";
  }
  let cur = "1";
  let prev = "";
  let count = 0;
  let say = "";
  for (let i = 1; i < n; i++) {
    prev = cur;
    cur = "";
    count = 1;
    say = prev[0];
    for (let j = 1; j < prev.length; j++) {
      if (prev[j] !== say) {
        cur += count + say;
        count = 1;
        say = prev[j];
      } else {
        count += 1;
      }
    }
    cur += count + say;
  }
  return cur;
};
