const findDifferentBinaryString = (nums) => nums.map((num, i) => (num[i] === "1" ? "0" : "1")).join("");
