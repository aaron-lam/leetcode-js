function majorityElement(nums) {
  const res = [];
  let a = 0, b = 0, count1 = 0, count2 = 0, n = nums.length;
  for (const num of nums) {
    if (num == a) count1 += 1;
    else if (num == b) count2 += 1;
    else if (count1 == 0) { a = num; count1 = 1; }
    else if (count2 == 0) { b = num; count2 = 1; }
    else { count1 -= 1; count2 -= 1; }
  }
  count1 = count2 = 0;
  for (const num of nums) {
    if (num == a) count1 += 1;
    else if (num == b) count2 += 1;
  }
  if (count1 > n / 3) res.push(a);
  if (count2 > n / 3) res.push(b);
  return res;
}
