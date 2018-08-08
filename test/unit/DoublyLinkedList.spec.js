import DoublyLinkedList, { DoublyLinkedListNode } from '../../src/dataStructure/DoublyLinkedList';

describe('data structure: doubly linked list', () => {
  it('拥有哨兵节点: head tail', () => {
    const doublyLinkedList = new DoublyLinkedList();
    expect(doublyLinkedList).toHaveProperty('head');
    expect(doublyLinkedList.head).toBeInstanceOf(DoublyLinkedListNode);
    expect(doublyLinkedList).toHaveProperty('tail');
    expect(doublyLinkedList.tail).toBeInstanceOf(DoublyLinkedListNode);
  });
});
