/**
 * Created by mutrix on 2018/8/2.
 */
export default class LinkedList {
  constructor(items) {
    this.head = {
      next: () => {},
    };
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

export class LinkedListNode {
}
