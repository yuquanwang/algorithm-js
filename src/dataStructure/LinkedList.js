/**
 * Created by mutrix on 2018/8/2.
 */

export class LinkedListNode {
  constructor(item) {
    if (item === undefined || item === null) {
      throw new TypeError('LinkedListNode constructor arg can not be undefinded or null');
    }
    this.value = item;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this[Symbol.iterator] = function* () {
      let node = this.head;
      while (node.next) {
        yield node.value;
        node = node.next;
      }
      yield node.value;
    };
  }

  append(item) {
    const newNode = new LinkedListNode(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(item) {
    const newNode = new LinkedListNode(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insert(item, position) {
    const newNode = new LinkedListNode(item);
    let node = this.head;
    let index = 0;

    while (node && node.next && index !== position - 1) {
      node = node.next;
      index += 1;
    }

    if (!node || !node.next) {
      this.append(item);
      return;
    }

    const { next } = node.next;
    newNode.next = next;
    node.next = newNode;
  }

  delete(position) {
    
  }
}
