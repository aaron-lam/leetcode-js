const simplifyPath = (path) => {
  if (!path || !path.length) {
    return "/";
  }
  const stack = [];
  const skip = new Set(["..", ".", ""]);
  for (const dir of path.split("/")) {
    if (dir === ".." && stack.length) {
      stack.pop();
    } else if (!skip.has(dir)) {
      stack.push(dir);
    }
  }
  return "/" + stack.join("/");
};
