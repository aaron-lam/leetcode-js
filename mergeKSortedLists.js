const mergeKLists = (lists) => {
  if (!lists || !lists.length) {
    return null;
  }

  const partition = (start, end) => {
    if (start > end) {
      return null;
    }
    if (start === end) {
      return lists[start];
    }
    const mid = Math.trunc((end - start) / 2) + start;
    const leftList = partition(start, mid);
    const rightList = partition(mid + 1, end);
    return merge(leftList, rightList);
  };

  return partition(0, lists.length - 1);
};

const merge = (l1, l2) => {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2);
    return l1;
  } else {
    l2.next = merge(l1, l2.next);
    return l2;
  }
};
