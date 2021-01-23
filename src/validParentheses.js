const isValid = (s) => {
  if (!s || !s.length) {
    return true;
  }
  const map = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  };
  const stack = [];
  for (const bracket of s.split("")) {
    if (isOpenBracket(bracket)) {
      stack.push(bracket);
    } else if (map[bracket] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

const isOpenBracket = (bracket) => bracket === "(" || bracket === "{" || bracket === "[";
