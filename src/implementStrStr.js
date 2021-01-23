const strStr = (haystack, needle) => {
  if (haystack === needle || needle === "") {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const temp = haystack.substring(i, i + needle.length);
      if (temp === needle) {
        return i;
      }
    }
  }
  return -1;
};
