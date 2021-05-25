const sort = (s) => s.split("").sort().join("");

const isAnagram = (s, t) => sort(s) === sort(t);
