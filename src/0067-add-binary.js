const addBinary = (a, b) => {
  const res = [];
  let i1 = a.length - 1;
  let i2 = b.length - 1;
  let carry = 0;
  while (i1 >= 0 || i2 >= 0 || carry !== 0) {
    let bit1 = a[i1] ?? 0;
    let bit2 = b[i2] ?? 0;
    let sum = Number(bit1) + Number(bit2) + carry;
    res.push(sum % 2);
    carry = Math.floor(sum / 2);
    i1 -= 1;
    i2 -= 1;
  }
  return res.reverse().join("");
};
