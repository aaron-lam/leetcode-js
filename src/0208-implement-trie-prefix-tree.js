class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord = false;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode(0);
  }

  insert(word) {
    let cur = this.root;
    for (const c of word) {
      const index = c.charCodeAt(0) - 97;
      if (cur.children[index] == null) {
        cur.children[index] = new TrieNode();
      }
      cur = cur.children[index];
    }
    cur.isWord = true;
  }
  
  search(word) {
    let cur = this.root;
    for (const c of word) {
      const index = c.charCodeAt(0) - 97;
      if (cur.children[index] == null) {
        return false;
      }
      cur = cur.children[index];
    }
    return cur.isWord;
  }
  
  startsWith(prefix) {
    let cur = this.root;
    for (const c of prefix) {
      const index = c.charCodeAt(0) - 97;
      if (cur.children[index] == null) {
        return false;
      }
      cur = cur.children[index];
    }
    return true;
  }
}
