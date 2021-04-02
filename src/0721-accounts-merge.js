/**
 * Solution 1: DFS
 */

const buildAccountsGraph = (accounts) => {
  const graph = new Map();
  const emailToName = new Map();
  for (const account of accounts) {
    const name = account[0];
    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      if (!graph.has(email)) {
        graph.set(email, new Set());
      }
      emailToName.set(email, name);
      if (i > 1) {
        const otherEmail = account[i - 1];
        graph.get(email).add(otherEmail);
        graph.get(otherEmail).add(email);
      }
    }
  }
  return [graph, emailToName];
}

const dfs = (graph, email, visitedEmails, emailList) => {
  emailList.push(email);
  for (const nextEmail of graph.get(email)) {
    if (!visitedEmails.has(nextEmail)) {
      visitedEmails.add(nextEmail);
      dfs(graph, nextEmail, visitedEmails, emailList);
    }
  }
}

const accountsMerge = (accounts) => {
  if (accounts == null || accounts.length === 0) {
    return [];
  }
  const [graph, emailToName] = buildAccountsGraph(accounts);
  const visitedEmails = new Set();
  const res = [];
  for (const email of emailToName.keys()) {
    const emailList = [];
    if (!visitedEmails.has(email)) {
      visitedEmails.add(email);
      dfs(graph, email, visitedEmails, emailList);
      emailList.sort();
      emailList.unshift(emailToName.get(email));
      res.push(emailList);
    }
  }
  return res;
};
