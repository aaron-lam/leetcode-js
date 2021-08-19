class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
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
    return this.find(word, 0, this.root);
  }
  
  find(word, index, node) {
    if (index === word.length) {
      return node.isWord;
    }
    if (word[index] !== ".") {
      const charIndex = word[index].charCodeAt(0) - 97;
      if (node.children[charIndex] == null) {
        return false;
      }
      return this.find(word, index + 1, node.children[charIndex]);
    }
    else {
      for (let i = 0; i < 26; i++) {
        if (node.children[i] != null && this.find(word, index + 1, node.children[i])) {
          return true;
        }
      }
    }
    return false;
  }
}
