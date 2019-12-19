const addStrings = (num1, num2) => {
  if (!num1 || !num2 || !num1.length || !num2.length) {
    return "0";
  }
  let carry = 0;
  let l1 = num1.length - 1;
  let l2 = num2.length - 1;
  const res = [];
  while (l1 >= 0 || l2 >= 0 || carry !== 0) {
    let sum = carry;
    sum += (l1 >= 0) ? Number(num1[l1]) : 0;
    sum += (l2 >= 0) ? Number(num2[l2]) : 0;
    res.unshift(sum % 10);
    carry = Math.trunc(sum / 10);
    l1 -= 1;
    l2 -= 1;
  }
  return res.join("");
};

console.log(addStrings("12", "243"));
