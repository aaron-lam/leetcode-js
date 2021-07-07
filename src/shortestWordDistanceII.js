class WordDistance {
  constructor(words) {
    this.map = new Map();
    for (let i = 0; i < words.length; i++) {
      const list = this.map.get(words[i]) || [];
      list.push(i);
      this.map.set(words[i], list);
    }
  }

  shortest(word1, word2) {
    let i = 0,
      j = 0,
      res = Number.POSITIVE_INFINITY;
    const list1 = this.map.get(word1);
    const list2 = this.map.get(word2);
    while (i < list1.length && j < list2.length) {
      res = Math.min(res, Math.abs(list1[i] - list2[j]));
      if (list1[i] < list2[j]) i += 1;
      else j += 1;
    }
    return res;
  }
}

const wd = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);
console.log(wd.shortest("coding", "practice"));
