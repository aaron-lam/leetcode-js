const addStrings = (num1, num2) => {
  const res = [];
  let i1 = num1.length - 1;
  let i2 = num2.length - 1;
  let carry = 0;
  while (i1 >= 0 || i2 >= 0 || carry !== 0) {
    let n1 = num1[i1] ?? 0;
    let n2 = num2[i2] ?? 0;
    let sum = Number(n1) + Number(n2) + carry;
    res.push(sum % 10);
    carry = Math.floor(sum / 10);
    i1 -= 1;
    i2 -= 1;
  }
  return res.reverse().join("");
};
