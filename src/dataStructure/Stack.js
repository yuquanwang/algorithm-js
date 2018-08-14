import Node from './Node';

export default class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    if (!this.top) throw new ReferenceError('no node to pop from the stack');
    this.top = this.top.next;
    this.size -= 1;
  }

  peek() {
    return this.top && this.top.value;
  }
}
