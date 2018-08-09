import DoublyLinkedList, { DoublyLinkedListNode } from '../../src/dataStructure/DoublyLinkedList';

describe('data structure: doubly linked list', () => {
  it('拥有哨兵节点: head tail', () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    expect(doublyLinkedList).toHaveProperty('head');
    expect(doublyLinkedList.head).toBeInstanceOf(DoublyLinkedListNode);
    expect(doublyLinkedList).toHaveProperty('tail');
    expect(doublyLinkedList.tail).toBeInstanceOf(DoublyLinkedListNode);
  });

  it('实例化', () => {
    expect(() => new DoublyLinkedList()).toThrow(TypeError);
    expect(() => new DoublyLinkedList(null)).toThrow(TypeError);
    expect(() => new DoublyLinkedList(undefined)).toThrow(TypeError);
    expect(() => new DoublyLinkedList(0)).not.toThrow(TypeError);
    const numberDoublyInstance = new DoublyLinkedList(1, 2, 3);
    expect(numberDoublyInstance.head.value).toBe(1);
    expect(numberDoublyInstance.head.previous).toBeNull();
    expect(numberDoublyInstance.head.next.value).toBe(2);
    expect(numberDoublyInstance.tail.value).toBe(3);
    expect(numberDoublyInstance.tail.previous.value).toBe(2);
    expect(numberDoublyInstance.tail.next).toBeNull();
  });

  it('实现Iterator, 可以使用for...of', () => {
    const list = new DoublyLinkedList(1, 2, 3, 4);
    expect(() => { for (const item of list) { item.toString(); } }).not.toThrow();
  });

  it('测试attachNext方法', () => {
    const list = new DoublyLinkedList(1, 2, 3, 4);
    list.attachNext(7);
    expect(list.tail.value).toBe(7);
    expect(list.tail.previous.value).toBe(4);
    expect(list.tail.next).toBeNull();
  });

  it('测试attachPrevious方法', () => {
    const list = new DoublyLinkedList(1, 2, 3, 4);
    list.attachPrevious(7);
    expect(list.head.value).toBe(7);
    expect(list.head.next.value).toBe(1);
    expect(list.head.previous).toBeNull();
  });
});

describe('doubly lined list node', () => {
  it('实例化节点', () => {
    const nullNode = new DoublyLinkedListNode(1);
    expect(nullNode.value).toBe(1);
    expect(nullNode.previous).toBe(null);
    expect(nullNode.next).toBe(null);
  });
});
