const strStr = (haystack, needle) => {
  if (needle == null || needle.length === 0) {
    return 0;
  }
  if (haystack == null || haystack.length === 0) {
    return -1;
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length && haystack[i + j] === needle[j]; j++) {
      if (j === needle.length - 1) {
        return i;
      }
    }
  }
  return -1;
};
