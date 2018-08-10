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

    const singleList = new DoublyLinkedList(3);
    expect(singleList.head.value).toBe(3);
    expect(singleList.tail.value).toBe(3);
    expect(singleList.head).toBe(singleList.tail);

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

  it('测试toString()方法', () => {
    const list = new DoublyLinkedList(1, 2, 3, 4, 5);
    expect(list.toString()).toBe('DoublyLinkedList: ->1, 2, 3, 4, 5<-;');
  });

  it('测试形成环形的情况', () => {
    const list = new DoublyLinkedList(8848, 16634, 15785, 47461, 3416);
    list.circle();
    expect(list.head.previous.value).toBe(3416);
    expect(list.tail).toBeNull();
    expect(list.toString()).toBe('DoublyLinkedList: <->8848, 16634, 15785, 47461, 3416;');

    const paraList = new DoublyLinkedList(3, 5, 9);
    const combinedList = list.combine(paraList);
    expect(combinedList.toString()).toBe('DoublyLinkedList: ->8848, 16634, 15785, 47461, 3416, 3, 5, 9<-;');
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

  it('测试detachNext方法', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    list.detachNext();
    expect(list.head.value).toBe(1);
    expect(list.head.previous).toBeNull();
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(2);
    expect(list.tail.next).toBeNull();
    expect(list.tail.previous.value).toBe(1);

    const singleList = new DoublyLinkedList(5);
    singleList.detachNext();
    expect(singleList).toEqual({});
  });

  it('测试detachPrevious方法', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    list.detachPrevious();
    expect(list.head.value).toBe(2);
    expect(list.head.previous).toBeNull();
    expect(list.head.next.value).toBe(3);
    expect(list.tail.value).toBe(3);
    expect(list.tail.next).toBeNull();
    expect(list.tail.previous.value).toBe(2);

    const singleList = new DoublyLinkedList(5);
    singleList.detachPrevious();
    expect(singleList).toEqual({});
  });

  it('连接两个DoublyLinkedList', () => {
    const a = new DoublyLinkedList(31978);
    const b = new DoublyLinkedList(3, 5, 7);
    const combinedList = a.combine(b);
    expect(combinedList.toString()).toBe('DoublyLinkedList: ->31978, 3, 5, 7<-;');
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
