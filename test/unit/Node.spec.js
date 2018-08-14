import Node from '../../src/dataStructure/Node';

describe('data Structure: Node', () => {
  it('实例化constructor', () => {
    const node = new Node();
    expect(node).toHaveProperty('value');
    expect(node).toHaveProperty('next');
    expect(node.value).toBeNull();
    expect(node.next).toBeNull();
  });

  it('测试getValue方法', () => {
    const node = new Node(3);
    expect(node.getValue()).toBe(3);
    const newNode = new Node('ok');
    expect(newNode.getValue()).toBe('ok');
  });

  it('测试getNext方法', () => {
    const next = new Node(5);
    const node = new Node(4, next);
    expect(node.getNext()).toBeInstanceOf(Node);
    expect(node.getNext().getValue()).toBe(5);
  });

  it('测试setValue方法', () => {
    const node = new Node();
    node.setValue();
    expect(node.getValue()).toBeNull();
    node.setValue(7);
    expect(node.getValue()).toBe(7);
  });

  it('测试setNext方法', () => {
    const node = new Node();
    let next = 1;
    expect(() => node.setNext(next)).toThrow(TypeError);
    expect(() => node.setNext()).not.toThrow();
    next = new Node(9);
    expect(node.setNext(next)).toBeInstanceOf(Node);
    expect(node.getNext().getValue()).toBe(9);
  });
});
