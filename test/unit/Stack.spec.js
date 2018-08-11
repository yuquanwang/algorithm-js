import Stack from '../../src/dataStructure/Stack';

describe('测试数据结构栈stack', () => {
  it('测试拥有的基本属性和方法', () => {
    const stack = new Stack();
    expect(stack).toHaveProperty('top');
    expect(stack).toHaveProperty('push');
    expect(stack).toHaveProperty('pop');
    expect(stack).toHaveProperty('peek');
    expect(stack).toHaveProperty('size');
  });

  it('测试push方法', () => {
    const stack = new Stack();
    expect(stack.top).toBeNull();
    stack.push(6);
    expect(stack.top.value).toBe(6);
    stack.push(10);
    expect(stack.top.value).toBe(10);
    expect(stack.size).toBe(2);
  });

  it('测试pop方法', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(ReferenceError);
    stack.push(4);
    stack.push(6);
    stack.push(5);
    stack.push(9);
    expect(stack.top.value).toBe(9);
    stack.pop();
    expect(stack.top.value).toBe(5);
    expect(stack.size).toBe(3);
  });

  it('测试peek方法', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();
    stack.push(4);
    stack.push(6);
    stack.push(5);
    stack.push(9);
    expect(stack.peek()).toBe(9);
  });
});
