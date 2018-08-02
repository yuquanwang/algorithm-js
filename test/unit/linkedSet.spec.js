/**
 * Created by mutrix on 2018/8/2.
 */
import LinkedList, {LinkedListNode} from '../../src/dataStructure/LinkedList';

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

  it.skip('可以接受数组', () => {
    const arr = [2, 4, 5];
    const linkedList = new LinkedList(arr);
    expect(linkedList.contains(4)).toBeTruthy();
    expect(linkedList.contains(1)).toBeFalsy();
  });
});

describe('LinkedList的节点实现了iterator协议', () => {
  it('节点具有next方法', () => {
    const linkdeList = new LinkedList();
    expect(linkdeList.head).toBeInstanceOf(LinkedListNode);
    expect(typeof linkdeList.head.next).toBe('function');
  });
});
