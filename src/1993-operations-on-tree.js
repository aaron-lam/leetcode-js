class TreeNode {
  constructor() {
    this.val = null;
    this.isLocked = false;
    this.user = null;
    this.parent = null;
    this.children = [];
  }
}

class LockingTree {
  constructor(parent) {
    const tree = parent.map(() => new TreeNode());
    for (let id = 0; id < parent.length; id++) {
      const parentId = parent[id];
      if (parentId !== -1) {
        tree[parentId].children.push(id);
        tree[id].parent = parentId;
      }
      tree[id].val = id;
    }
    this.tree = tree;
  }

  lock(num, user) {
    if (this.tree[num].isLocked) {
      return false;
    }
    this.tree[num].isLocked = true;
    this.tree[num].user = user;
    return true;
  }

  unlock(num, user) {
    if (!this.tree[num].isLocked || this.tree[num].user !== user) {
      return false;
    }
    this.tree[num].isLocked = false;
    return true;
  }

  upgrade(num, user) {
    if (this.tree[num].isLocked || !this.hasLockedDescendant(num) || this.hasLockedAncestors(num)) {
      return false;
    }
    this.unlockAllDescendants(num);
    this.lock(num, user);
    return true;
  }

  hasLockedDescendant(id) {
    if (this.tree[id].isLocked) {
      return true;
    }
    for (const childId of this.tree[id].children) {
      if (this.hasLockedDescendant(childId)) {
        return true;
      }
    }
    return false;
  }

  hasLockedAncestors(id) {
    let parentId = id;
    while (parentId !== null) {
      if (this.tree[parentId].isLocked) {
        return true;
      }
      parentId = this.tree[parentId].parent;
    }
    return false;
  }

  unlockAllDescendants(id) {
    this.tree[id].isLocked = false;
    for (const childId of this.tree[id].children) {
      this.unlockAllDescendants(childId);
    }
  }
}
