const subdomainVisits = (cpdomains) => {
  if (!cpdomains || !cpdomains.length) {
    return [];
  }
  const map = new Map();
  for (const domain of cpdomains) {
    const domainArr = domain.split(" ");
    const num = Number(domainArr[0]);
    let subDomain = domainArr[1];
    while (subDomain) {
      map.set(subDomain, (map.get(subDomain) || 0) + num);
      const idx = subDomain.indexOf(".");
      if (idx === -1) {
        subDomain = null;
      } else {
        subDomain = subDomain.substring(idx + 1);
      }
    }
  }
  const res = [];
  for (const [domain, num] of map) {
    res.push(num + " " + domain);
  }
  return res;
};
