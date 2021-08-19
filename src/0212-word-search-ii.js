import { Trie } from "./0208-implement-trie-prefix-tree";

const findWords = (board, words) => {
  const m = board.length;
  const n = board[0].length;
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }
  const visited = new Array(m).fill(0).map(() => new Array(n));
  const res = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(board, visited, "", trie, res, i, j);
    }
  }
  return [...res];
};

const dfs = (board, visited, str, trie, res, i, j) => {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j]) {
    return;
  }
  str += board[i][j];
  if (!trie.startsWith(str)) {
    return;
  }
  if (trie.search(str)) {
    res.add(str);
  }
  visited[i][j] = true;
  dfs(board, visited, str, trie, res, i + 1, j);
  dfs(board, visited, str, trie, res, i - 1, j);
  dfs(board, visited, str, trie, res, i, j + 1);
  dfs(board, visited, str, trie, res, i, j - 1);
  visited[i][j] = false;
}
