/**
 * Created by mutrix on 2018/8/2.
 */
import LinkedList from '../../src/dataStructure/LinkedList';

describe('linked List', () => {
  it('存在并可new LinkedList', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeInstanceOf(LinkedList);
  });
});
