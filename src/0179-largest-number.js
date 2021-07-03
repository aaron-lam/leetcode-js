const largestNumber = (nums) => {
  if (nums == null || nums.length === 0) {
    return "";
  }
  const sNums = nums.map((num) => String(num));
  sNums.sort((str1, str2) => {
    const s1 = str1 + str2;
    const s2 = str2 + str1;
    return Number(s2) - Number(s1);
  });
  if (sNums[0] === "0") {
    return "0";
  }
  return sNums.join("");
};
