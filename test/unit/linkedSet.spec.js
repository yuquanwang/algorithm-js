/**
 * Created by mutrix on 2018/8/2.
 */
import LinkedList, { LinkedListNode } from '../../src/dataStructure/LinkedList';

describe('linked List', () => {
  it('存在并可new LinkedList', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeInstanceOf(LinkedList);
  });

  it('具有首尾两个节点', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();
  });

  it('添加节点的方法', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    expect(linkedList.head).toEqual(1);
  });
});

describe('LinkedList的实现了iterator协议', () => {

  it('LinkedListNode实现了协议的next()方法', () => {
    const node = new LinkedListNode();
    expect(typeof node.next).toBe('function');
    expect(typeof node.next()).toBe('object');
    expect(node.next()).toHaveProperty('done');
    expect(node.next()).toHaveProperty('value');
  });
});
