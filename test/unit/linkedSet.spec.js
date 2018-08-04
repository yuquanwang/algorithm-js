/**
 * Created by mutrix on 2018/8/2.
 */
import LinkedList, { LinkedListNode } from '../../src/dataStructure/LinkedList';

describe('LinkedList', () => {

  let linkedListSample;
  let nullLinkedList;
  beforeEach(() => {
    nullLinkedList = new LinkedList();
    linkedListSample = new LinkedList();
    linkedListSample.append(1);
    linkedListSample.append(5);
    linkedListSample.append(4);
    linkedListSample.append(7);
  });

  afterEach(() => {
    linkedListSample = null;
    nullLinkedList = null;
  });

  it('存在并可new LinkedList', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeInstanceOf(LinkedList);
  });

  it('具有首尾两个节点', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();
  });

  it('向后添加节点的方法', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    const { head } = linkedList;
    expect(head.value).toBe(1);
    linkedList.append(2);
    const numberNode = head.next;
    expect(numberNode.value).toBe(2);
    linkedList.append([3, 4, 5]);
    const arrayNode = numberNode.next;
    expect(arrayNode.value).toEqual([3, 4, 5]);
  });

  it('向前添加节点的方法', () => {
    nullLinkedList.prepend(3);
    expect(nullLinkedList.head.value).toBe(3);
    linkedListSample.prepend(9);
    expect(linkedListSample.head.value).toBe(9);
  });

  it('插入节点的方法：正常情况', () => {
    linkedListSample.insert(10, 2);
    const first = linkedListSample.head;
    const second = first.next;
    const third = second.next;
    expect(third.value).toBe(10);
  });

  it('插入节点的方法：空list插入', () => {
    nullLinkedList.insert(3);
    expect(nullLinkedList.head.value).toBe(3);
  });

  it('插入节点的方法：参数缺省', () => {
    linkedListSample.insert(17);
    expect(linkedListSample.tail.value).toBe(17);
  });

  it('插入节点的方法：index超出总长度', () => {
    linkedListSample.insert(17, 10);
    expect(linkedListSample.tail.value).toBe(17);
  });

  it('删除节点的方法：正常情况', () => {
    linkedListSample.delete(2);
    const first = linkedListSample.head;
    const second = first.next;
    const third = second.next;
    expect(third.value).toBe(7);
  });

  it('LinkedList可以使用迭代器', () => {
    for (const item of linkedListSample) {
      expect(typeof item).toBe('number');
    }
  });
});

describe('LinkedListNode节点', () => {
  it('节点不接受null和undefined', () => {
    expect(() => new LinkedListNode()).toThrow(TypeError);
    expect(() => new LinkedListNode(null)).toThrowError(TypeError);
    expect(() => new LinkedListNode(undefined)).toThrowError(TypeError);
  });
});
