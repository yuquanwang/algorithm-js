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

    if (args.length === 1) {
      if (typeof args[0] === 'object') {
        this.constructor(...args[0]);
      } else {
        this.append(args[0]);
      }
    } else {
      for (const item of args) {
        this.append(item);
      }
    }

    this[Symbol.iterator] = function*() {
      let node = this.head;
      while (node.next) {
        yield node.value;
        node = node.next;
      }
      yield node.value;
    };
  }

  getLength() {
    let node = this.head;
    let length = node ? 1 : 0;

    while (node && node.next) {
      node = node.next;
      length += 1;
    }
    return length;
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

  insert(item, position) {
    if (typeof position !== 'number' && position !== undefined && position !== null) {
      throw TypeError('position type error');
    }
    const newNode = new LinkedListNode(item);
    let index = 0;
    let node = this.head;

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

  removeFrom(position) {
    if (position === undefined || position === null) {
      this.removeFrom(this.getLength() > 0 ? this.getLength() - 1 : 0);
      return;
    }
    let index = 0;
    let node = this.head;
    while (node && node.next && index !== position - 1) {
      node = node.next;
      index += 1;
    }
    if (position > this.getLength() - 1 || position < 0) {
      throw new RangeError(`${position} is out of range of 0 - ${this.getLength() - 1}`);
    }
    if (position === this.getLength() - 1) {
      this.tail = node;
    }
    node.next = node.next.next;
  }

  insertAfter(value, item, times = 1) {
    const isRequiredValue = (nodeValue, count) => isEqual(nodeValue, value) && count === times;
    const newNode = new LinkedListNode(item);
    let node = this.head;
    let count = 1;
    while (node && node.next && !isRequiredValue(node.value, count)) {
      if (node.value === value) count += 1;
      node = node.next;
    }
    if (!node.next && !isEqual(node.value, value)) {
      throw new RangeError(`can not find ${value}`);
    }
    newNode.next = node.next;
    node.next = newNode;
    if (!node.next.next) this.tail = newNode;
  }

  remove(item) {
    let node = this.head;
    let preNode = this.head;
    while (node && node.next && !isEqual(item, node.value)) {
      preNode = node;
      node = node.next;
    }
    if (!isEqual(item, node.value)) throw new RangeError(`can not find ${item}`);
    if (preNode === node) {
      this.head = this.head.next;
      return;
    }
    preNode.next = node.next;
    if (!node.next) this.tail = preNode;
  }
}
