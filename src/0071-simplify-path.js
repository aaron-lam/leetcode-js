const simplifyPath = (path) => {
  if (path == null || path.length === 0) {
    return "/";
  }
  const pathArr = path.split("/");
  const simplifiedPath = []; 
  for (const subPath of pathArr) {
    if (subPath.length === 0 || subPath === ".") {
      continue;
    } else if (subPath === "..") {
      if (simplifiedPath.length > 0) {
        simplifiedPath.pop();
      }
    } else {
      simplifiedPath.push(subPath);
    }
  }
  return "/" + simplifiedPath.join("/");
};
