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
      }
      yield currentNode.value;
    };
  }

  attachNext(item) {
    const newNode = new DoublyLinkedListNode(item);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }

  detachNext() {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }

  attachPrevious(item) {
    const newNode = new DoublyLinkedListNode(item);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
}
