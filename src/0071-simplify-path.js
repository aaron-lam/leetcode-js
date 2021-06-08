const simplifyPath = (path) => {
  if (path == null || path.length === 0) {
    return "/";
  }
  const pathArr = path.split("/");
  const stack = [];
  for (const subPath of pathArr) {
    if (subPath === "" || subPath === ".") {
      continue;
    }
    if (subPath === "..") {
      stack.pop();
    } else {
      stack.push(subPath);
    }
  }
  return "/" + stack.join("/");
};
