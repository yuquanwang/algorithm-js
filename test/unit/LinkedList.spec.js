/**
 * Created by mutrix on 2018/8/2.
 */
import LinkedList from '../../src/dataStructure/LinkedList';

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

  it('实例化', () => {
    expect(new LinkedList()).toBeInstanceOf(LinkedList);
    const oneList = new LinkedList();
    oneList.append(10);
    expect(oneList.head.value).toBe(10);
    expect(oneList.tail.value).toBe(10);
    expect(oneList.size).toBe(1);

    const obj = { str: 'ok' };
    const linkedList = new LinkedList();
    linkedList.append([3, 6, 9, obj]);
    expect(linkedList.head.value).toEqual([3, 6, 9, obj]);

    expect(linkedListSample.size).toBe(4);
    expect(() => linkedListSample.getLength()).toThrow();
    expect(linkedListSample.head.value).toBe(1);
    expect(linkedListSample.head.next.value).toBe(5);
    expect(linkedListSample.head.next.next.value).toBe(4);
    expect(linkedListSample.head.next.next.next.value).toBe(7);
  });

  it('toString()方法', () => {
    expect(new LinkedList().toString()).toBe('LinkedList: null;');
    const list = new LinkedList();
    list.append(1);
    list.append({ str: 'ok' });
    expect(list.toString()).toBe(`LinkedList: 1, ${({ str: 'ok' })};`);

    linkedListSample.prepend(4);
    expect(linkedListSample.toString()).toBe('LinkedList: 4, 1, 5, 4, 7;');
  });

  it('isEmpty()方法', () => {
    expect(linkedListSample.isEmpty()).toBeFalsy();
    expect(new LinkedList().isEmpty()).toBeTruthy();
  });

  it('具有首尾两个节点, getBegin()、 getEnd()', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();

    expect(linkedListSample.getHead().value).toBe(1);
    expect(linkedListSample.getTail().value).toBe(7);
  });

  it('向后添加节点的append方法', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    const { head } = linkedList;
    expect(head.value).toBe(1);
    linkedList.append(2);
    const numberNode = head.getNext();
    expect(numberNode.value).toBe(2);
    linkedList.append([3, 4, 5]);
    expect(numberNode.getNext().value).toEqual([3, 4, 5]);
  });

  it('向前添加节点的prepend方法', () => {
    nullLinkedList.prepend(3);
    expect(nullLinkedList.head.value).toBe(3);
    linkedListSample.prepend(9);
    expect(linkedListSample.head.value).toBe(9);
  });

  it('向某个节点后添加节点insertAfter()', () => {
    linkedListSample.insertAfter(4, 4);
    expect(linkedListSample.toString()).toBe('LinkedList: 1, 5, 4, 4, 7;');

    linkedListSample.insertAfter(7, 8);
    expect(linkedListSample.toString()).toBe('LinkedList: 1, 5, 4, 4, 7, 8;');
    expect(linkedListSample.getTail().value).toBe(8);
    expect(linkedListSample.getSize()).toBe(6);

    expect(() => linkedListSample.insertAfter(10, 2)).toThrow(ReferenceError);
  });

  it('移除head节点detachHead()', () => {
    linkedListSample.detachHead();
    expect(linkedListSample.getHead().getValue()).toBe(5);
    expect(linkedListSample.toString()).toBe('LinkedList: 5, 4, 7;');
    expect(linkedListSample.getSize()).toBe(3);

    const list = new LinkedList();
    expect(() => list.detachHead()).toThrow(ReferenceError);
    list.append(4);
    list.detachHead();
    expect(list.getHead()).toBeNull();
  });

  it('移除某节点之后的节点removeAfter()', () => {
    linkedListSample.removeAfter(5);
    expect(linkedListSample.getSize()).toBe(3);
    expect(linkedListSample.toString()).toBe('LinkedList: 1, 5, 7;');
    expect(() => linkedListSample.removeAfter(10)).toThrow(ReferenceError);
    linkedListSample.removeAfter(5);
    expect(linkedListSample.getTail().value).toBe(5);
  });

  it('得到第n位的值getValueAt()', () => {
    expect(linkedListSample.getValueAt(0)).toBe(1);
    expect(linkedListSample.getValueAt(2)).toBe(4);
    expect(linkedListSample.getValueAt(10)).toBeNull();
    expect(() => linkedListSample.getValueAt('a')).toThrow(TypeError);
  });

  it('给第n个节点设值setValueAt()', () => {
    linkedListSample.setValueAt(2, 9);
    expect(linkedListSample.getValueAt(2)).toBe(9);
  });

  it('LinkedList可以使用迭代器for...of', () => {
    expect(() => { for (const item of linkedListSample) { item.toString(); } }).not.toThrow();
  });
});
