/**
 * Created by mutrix on 2018/8/2.
 */
import LinkedList from '../../src/dataStructure/LinkedList';

describe('LinkedList', () => {
  let linkedListSample;
  let nullLinkedList;
  const list = new LinkedList();
  beforeEach(() => {
    nullLinkedList = new LinkedList();
    linkedListSample = new LinkedList(1, 5, 4, 7);
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
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
    expect(oneList.size).toBe(1);

    const obj = { str: 'ok' };
    const linkedList = new LinkedList([3, 6, 9, obj]);
    expect(linkedList.head.value).toEqual([3, 6, 9, obj]);

    expect(linkedListSample.size).toBe(4);
    expect(() => linkedListSample.getLength()).toThrow();
    expect(linkedListSample.head.value).toBe(1);
    expect(linkedListSample.head.next.value).toBe(5);
    expect(linkedListSample.head.next.next.value).toBe(4);
    expect(linkedListSample.head.next.next.next.value).toBe(7);
  });

  it('具有首尾两个节点, getBegin()、 getEnd()', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();

    expect(list.getBegin().value).toBe(0);
    expect(list.getEnd().value).toBe(3);
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
    expect(new LinkedList(1, { str: 'ok' }).toString()).toBe(`LinkedList: 1, ${({ str: 'ok' })};`);

    linkedListSample.prepend(4);
    expect(linkedListSample.toString()).toBe('LinkedList: 4, 1, 5, 4, 7;');
  });

  it('向后添加节点的append方法', () => {
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

  it('删除节点的方法：删除尾部节点tail', () => {
    linkedListSample.detachTail();
    expect(linkedListSample.tail.value).toBe(4);
  });

  it('删除某个节点: 正常情况', () => {
    const linkedList = new LinkedList(3, 5, 8, 1);
    linkedList.detachTail();
    expect(linkedList.has(1)).toBeFalsy();
    expect(linkedList.tail.value).toBe(8);
  });

  it('LinkedList可以使用迭代器', () => {
    expect(() => { for (const item of linkedListSample) { item.toString(); } }).not.toThrow();
  });

  it('类型错误', () => {
    expect(() => linkedListSample.insert(4, 'gro')).toThrow(TypeError);
    expect(() => linkedListSample.removeFrom('gro')).toThrow(TypeError);
  });
});
