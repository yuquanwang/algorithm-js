/**
 * Created by mutrix on 2018/8/2.
 */

import { isEqual } from 'lodash';

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
  constructor(...args) {
    this.head = null;
    this.tail = null;

    for (const item of args) {
      this.append(item);
    }

    // eslint-disable-next-line func-names
    this[Symbol.iterator] = function* () {
      let node = this.head;
      while (node.next) {
        yield node.value;
        node = node.next;
      }
      yield node.value;
    };

    const getLength = () => {
      let node = this.head;
      let length = node ? 1 : 0;
      while (node && node.next) {
        node = node.next;
        length += 1;
      }
      return length;
    };

    this.length = getLength();
  }

  has(item) {
    for (const value of this) {
      if (isEqual(value, item)) return true;
    }
    return false;
  }

  toString() {
    let str = 'LinkedList:';
    let node = this.head;
    while (node && node.next) {
      str += ` ${node.value},`;
      node = node.next;
    }
    str += node ? ` ${node.value};` : ' null;';
    return str;
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

  detachTail() {
    let node = this.head;
    let preNode = this.head;
    while (node && node.next) {
      preNode = node;
      node = node.next;
    }
    this.tail = preNode;
    this.tail.next = null;
  }
}
