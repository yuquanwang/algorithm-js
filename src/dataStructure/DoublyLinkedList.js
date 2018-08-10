import { clone, isEqual } from 'lodash';

export class DoublyLinkedListNode {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

export default class DoublyLinkedList {
  constructor(...args) {
    if (!args.length || args[0] === null || args[0] === undefined) throw new TypeError('null or undefined is not allowed for the head');
    let node = this.head;
    args.forEach((item, index) => {
      const newNode = new DoublyLinkedListNode(item);
      if (index === 0) {
        this.head = newNode;
        node = this.head;
      } else {
        node.next = newNode;
        newNode.previous = node;
        node = newNode;
      }
    });
    this.tail = node;

    // eslint-disable-next-line
    this[Symbol.iterator] = function* () {
      let currentNode = this.head;
      while (currentNode.next) {
        yield currentNode.value;
        currentNode = currentNode.next;
        if (currentNode === this.head) {
          return;
        }
      }
      yield currentNode.value;
    };

    const getLength = () => {
      let i = 0;
      // eslint-disable-next-line no-unused-vars
      for (const item of this) {
        i += 1;
      }
      return i;
    };

    this.length = getLength();
  }

  has(value) {
    for (const item of this) {
      if (isEqual(value, item)) return true;
    }
    return false;
  }

  circle() {
    this.head.previous = this.tail;
    this.tail.next = this.head;
    this.tail = null;
  }

  destructCircle() {
    if (this.tail) {
      throw new TypeError('not a circled list');
    }
    this.tail = this.head.previous;
    this.tail.next = null;
    this.head.previous = null;
  }

  toString() {
    let str = 'DoublyLinkedList:';
    for (const item of this) {
      str += ` ${item},`;
    }
    str = str.replace(/\s/, this.tail ? ' ->' : ' <->');
    str = str.replace(/,$/, this.tail ? '<-;' : ';');
    return str;
  }

  attachNext(item) {
    const newNode = new DoublyLinkedListNode(item);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }

  detachNext() {
    if (this.tail.previous === null) {
      this.destroy();
      return;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;
  }

  attachPrevious(item) {
    const newNode = new DoublyLinkedListNode(item);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  detachPrevious() {
    if (this.head.next === null) {
      this.destroy();
      return;
    }
    this.head = this.head.next;
    this.head.previous = null;
  }

  combine(list) {
    const temp = clone(this);
    if (temp.tail === null) temp.destructCircle();
    for (const item of list) {
      temp.attachNext(item);
    }
    return temp;
  }

  destroy() {
    delete this.head;
    delete this.tail;
    delete this[Symbol.iterator];
    delete this.length;
  }
}
