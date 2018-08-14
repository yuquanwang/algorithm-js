export default class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  setValue(value = null) {
    this.value = value;
  }

  setNext(node = null) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else throw new TypeError('Non node instance to be received!');
    return node;
  }
}
