/**
 * Created by mutrix on 2018/8/2.
 */

import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;

    // eslint-disable-next-line func-names
    this[Symbol.iterator] = function* () {
      let node = this.head;
      while (node && node.next) {
        yield node.value;
        node = node.next;
      }
      yield node ? node.value : null;
    };
  }

  isEmpty() {
    return !this.size;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
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
    this.size += 1;
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
    this.size += 1;
  }

  insertAfter(value, item) {
    let node = this.head;
    while (node && node.value !== value) {
      node = node.getNext();
    }
    if (!node) throw new ReferenceError('can not find required value to be inserted');
    const newNode = new Node(item);
    newNode.setNext(node.getNext());
    node.setNext(newNode);
    if (node === this.tail) this.tail = newNode;
    this.size += 1;
  }

  removeAfter(value) {
    let node = this.head;
    while (node && node.value !== value) {
      node = node.getNext();
    }
    if (!node) throw new ReferenceError('can not find required value to be removed after!');
    const dropNode = node.getNext();
    node.setNext(dropNode.getNext());
    if (dropNode === this.getTail()) this.tail = node;
    dropNode.setNext(null);
    this.size -= 1;
  }

  detachHead() {
    if (!this.head) throw new ReferenceError('empty list without head node!');
    const node = this.head;
    this.head = this.getHead().getNext();
    this.size -= 1;
    node.setValue(null);
    node.setNext(null);
  }

  getValueAt(n) {
    if (typeof n !== 'number') throw new TypeError('only number to be received!');
    let i = 0;
    for (const value of this) {
      if (i === n) return value;
      i += 1;
    }
    return null;
  }

  setValueAt(n, value) {
    if (typeof n !== 'number') throw new TypeError('only number to be received!');
    let i = 0;
    for (const item of this) {
      if (i === n) return item;
      i += 1;
    }
    return null;
  }
}
