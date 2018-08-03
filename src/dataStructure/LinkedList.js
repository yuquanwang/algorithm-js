/**
 * Created by mutrix on 2018/8/2.
 */

export class LinkedListNode {
  constructor() {}
  next() {
    return { done: false, value: 1};
  }
}

export default class LinkedList {
  constructor(items) {
    this.head = new LinkedListNode();
    this.tail = null;
  }

  contains(ele) {
    for (const item of this.items) {
      if (item === ele) {
        return true;
      }
    }
    return false;
  }
}

