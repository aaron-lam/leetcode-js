const reverseWords = (s) => {
  if (!s || !s.length) {
    return "";
  }
  return s.trim().split(/\s+/).reverse().join(" ");
};
