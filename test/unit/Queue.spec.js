import Queue from '../../src/dataStructure/Queue';

describe('测试队列Queue', () => {
  it('Queue继承自链表LinkedList', () => {
    const queue = new Queue();
    expect(queue.rear).toBeDefined();
    expect(queue.front).toBeDefined();
    expect(queue.size).toBe(0);
  });

  it('可以使用for...of', () => {
    const queue = new Queue();
    expect(() => { for (const item of queue) { if (item) item.toString(); } }).not.toThrow();
  });

  it('队列的enqueue方法', () => {
    const queue = new Queue();
    queue.enqueue(8);
    expect(queue.rear.value).toBe(8);
    expect(queue.toString()).toBe('Queue: 8;');
    queue.enqueue(6);
    expect(queue.toString()).toBe('Queue: 6, 8;');
  });

  it('队列的peek方法', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeNull();
    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(9);
    expect(queue.peek()).toBe(4);
    queue.dequeue();
    expect(queue.peek()).toBe(6);
  });

  it('队列的dequeue方法', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow(/no\snode/);
    queue.enqueue(10);
    expect(queue.size).toBe(1);
    queue.enqueue(8);
    expect(queue.size).toBe(2);
    expect(queue.toString()).toBe('Queue: 8, 10;');
    queue.dequeue();
    expect(queue.toString()).toBe('Queue: 8;');
  });
});
