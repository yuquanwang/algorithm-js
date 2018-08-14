/**
 * Created by mutrix on 2018/8/2.
 */

import { isEqual } from 'lodash';
import Node from './Node';

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
      while (node && node.next) {
        yield node.value;
        node = node.next;
      }
      yield node ? node.value : null;
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

    this.size = getLength();
  }

  has(item) {
    for (const value of this) {
      if (isEqual(value, item)) return true;
    }
    return false;
  }

  toString() {
    let str = 'LinkedList:';
    for (const item of this) {
      str += ` ${item},`;
    }
    return str.replace(/,$/, ';');
  }

  append(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(item) {
    const newNode = new Node(item);
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
