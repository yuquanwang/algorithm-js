import Node from './Node';

export default class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.size = 0;

    // eslint-disable-next-line func-names
    this[Symbol.iterator] = function* () {
      let node = this.rear;
      while (node && node.next) {
        yield node.value;
        node = node.next;
      }
      yield node ? node.value : null;
    };
  }

  toString() {
    let str = 'Queue:';
    for (const item of this) {
      str += ` ${item},`;
    }
    return str.replace(/,$/, ';');
  }

  peek() {
    let node = this.rear;
    while (node && node.next) {
      node = node.next;
    }
    return node && node.value;
  }

  enqueue(item) {
    const node = new Node(item);
    if (!this.front) {
      this.front = node;
    }
    node.next = this.rear;
    this.rear = node;
    this.size += 1;
  }

  dequeue() {
    if (this.size === 0) throw new RangeError('no node to be dequeued');
    let node = this.rear;
    let preNode = this.rear;
    while (node && node.next) {
      preNode = node;
      node = node.next;
    }
    this.front = preNode;
    this.front.next = null;
    this.size -= 1;
  }
}
