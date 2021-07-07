const removeDuplicateLetters = (s) => {
  const freqCounts = new Map();
  const isVisited = new Set();
  const sArr = s.split("");
  for (const c of sArr) {
    freqCounts.set(c, (freqCounts.get(c) ?? 0) + 1);
  }
  const stack = [];
  for (const c of sArr) {
    freqCounts.set(c, freqCounts.get(c) - 1);
    if (isVisited.has(c)) {
      continue;
    }
    while (stack.length > 0 && c < stack[stack.length - 1] && freqCounts.get(stack[stack.length - 1]) !== 0) {
      isVisited.delete(stack.pop());
    }
    stack.push(c);
    isVisited.add(c);
  }
  return stack.join("");
};
