let resList;
let curList;

const partition = (s) => {
  if (!s || !s.length) {
    return [];
  }
  resList = [];
  curList = [];
  backtrack(s, 0);
  return resList;
};

const backtrack = (s, idx) => {
  if (curList.length > 0 && idx >= s.length) {
    const list = [...curList];
    resList.push(list);
  }
  for (let i = idx; i < s.length; i++) {
    if (isPalindrome(s, idx, i)) {
      curList.push(s.substring(idx, i + 1));
      backtrack(s, i + 1);
      curList.pop();
    }
  }
};

const isPalindrome = (s, start, end) => {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
