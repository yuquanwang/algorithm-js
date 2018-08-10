/**
 * Created by mutrix on 2018/8/2.
 */
import LinkedList, { LinkedListNode } from '../../src/dataStructure/LinkedList';

describe('LinkedList', () => {
  let linkedListSample;
  let nullLinkedList;
  beforeEach(() => {
    nullLinkedList = new LinkedList();
    linkedListSample = new LinkedList(1, 5, 4, 7);
  });

  afterEach(() => {
    linkedListSample = null;
    nullLinkedList = null;
  });

  it('实例化', () => {
    expect(new LinkedList()).toBeInstanceOf(LinkedList);
    const oneList = new LinkedList(10);
    expect(oneList.head.value).toBe(10);
    expect(oneList.tail.value).toBe(10);

    const obj = { str: 'ok' };
    const linkedList = new LinkedList([3, 6, 9, obj]);
    expect(linkedList).toBeInstanceOf(LinkedList);
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.head.next.value).toBe(6);
    expect(linkedList.head.next.next.value).toBe(9);
    expect(linkedList.head.next.next.next.value).toEqual({ str: 'ok' });
    expect(linkedList.tail.value).toBe(obj);

    expect(linkedListSample.head.value).toBe(1);
    expect(linkedListSample.head.next.value).toBe(5);
    expect(linkedListSample.head.next.next.value).toBe(4);
    expect(linkedListSample.head.next.next.next.value).toBe(7);
  });

  it('具有首尾两个节点', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();
  });

  it('has()方法', () => {
    expect(linkedListSample.has(1)).toBeTruthy();
    expect(linkedListSample.has(5)).toBeTruthy();
    expect(linkedListSample.has(9)).toBeFalsy();

    const hasList = new LinkedList(4, 6, { str: 'ok' }, [4, 5, 6]);
    expect(hasList.has({ str: 'ok' })).toBeTruthy();
    expect(hasList.has([4, 5, 6])).toBeTruthy();
  });

  it('toString()方法', () => {
    expect(new LinkedList().toString()).toBe('LinkedList: null;');
    expect(new LinkedList(1, { str: 'ok' }).toString()).toBe(`LinkedList: 1, ${({ str: 'ok' }).toString()};`);
    expect(linkedListSample.toString()).toBe('LinkedList: 1, 5, 4, 7;');
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

  it('插入节点的方法: 尾部节点', () => {
    linkedListSample.insert(54, 4);
    expect(linkedListSample.tail.value).toBe(54);
  });

  it('从某个节点后方插入节点: 正常情况', () => {
    linkedListSample.insertAfter(5, 20);
    const first = linkedListSample.head;
    const second = first.next;
    const third = second.next;
    expect(third.value).toBe(20);
    expect(third.next.value).toBe(4);

    const twiceInsertLinst = new LinkedList(2, 3, 2, 6);
    twiceInsertLinst.insertAfter(2, 20, 2);
    const one = twiceInsertLinst.head;
    const two = one.next;
    const three = two.next;
    expect(one.next.value).toBe(3);
    expect(three.next.value).toBe(20);
  });

  it('从某个节点后方插入节点: 尾部节点', () => {
    linkedListSample.insertAfter(7, 50);
    expect(linkedListSample.tail.value).toBe(50);
  });

  it('从某个节点后方插入节点: 无该节点', () => {
    expect(() => linkedListSample.insertAfter(8, 50)).toThrow(RangeError);
  });

  it('删除节点的方法：正常情况', () => {
    linkedListSample.removeFrom(2);
    const first = linkedListSample.head;
    const second = first.next;
    const third = second.next;
    expect(third.value).toBe(7);
  });

  it('删除节点的方法：节点不存在', () => {
    expect(() => nullLinkedList.removeFrom()).toThrow(RangeError);
    expect(() => linkedListSample.removeFrom(10)).toThrow(RangeError);
    expect(() => linkedListSample.removeFrom(10)).toThrow(/3/);
  });

  it('删除节点的方法：删除尾部节点tail', () => {
    linkedListSample.removeFrom();
    expect(linkedListSample.tail.value).toBe(4);
  });

  it('删除某个节点: 正常情况', () => {
    linkedListSample.remove(5);
    expect(linkedListSample.has(5)).toBeFalsy();

    const linkedList = new LinkedList(3, 5, 8, 1);
    linkedList.remove(3);
    expect(linkedList.has(3)).toBeFalsy();
    expect(linkedList.head.value).toBe(5);
    linkedList.remove(1);
    expect(linkedList.has(1)).toBeFalsy();
    expect(linkedList.tail.value).toBe(8);
  });

  it('删除某个节点: 节点不存在', () => {
    expect(() => linkedListSample.remove(10)).toThrow(RangeError);
  });

  it('LinkedList可以使用迭代器', () => {
    for (const item of linkedListSample) {
      expect(typeof item).toBe('number');
    }
  });

  it('类型错误', () => {
    expect(() => linkedListSample.insert(4, 'gro')).toThrow(TypeError);
    expect(() => linkedListSample.removeFrom('gro')).toThrow(TypeError);
  });
});

describe('LinkedListNode节点', () => {
  it('节点不接受null和undefined', () => {
    expect(() => new LinkedListNode()).toThrow(TypeError);
    expect(() => new LinkedListNode(null)).toThrowError(TypeError);
    expect(() => new LinkedListNode(undefined)).toThrowError(TypeError);
  });
});
