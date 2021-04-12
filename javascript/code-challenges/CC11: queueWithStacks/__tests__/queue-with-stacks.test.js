'use strict';

// Require our PseudoQueue implementation
const PseudoQueue = require('../queue-with-stacks');
const sQueue = new PseudoQueue();

describe('Queue Test', () => {
  it('should instantiate an empty queue with stacks', () => {
    // expect(sQueue.front).toBeNull();
    // expect(sQueue.rear).toBeNull();
    expect(sQueue.pushStack.top).toBeNull();
    expect(sQueue.popStack.top).toBeNull();
  });
  it('should enqueue to an existing empty queue', () => {
    let value = 10;
    sQueue.enqueue(value);
    // expect(sQueue.front.value).toEqual(value);
    // expect(sQueue.front.next).toBeNull();
    expect(sQueue.pushStack.top.value).toBe(value);
    expect(sQueue.popStack.isEmpty()).toBeTruthy();
  });
  it('should dequeue from existing queue', () => {
    let value = 20;
    sQueue.enqueue(value);
    // expect(sQueue.front.next.value).toEqual(value);
    expect(sQueue.dequeue()).toEqual(10);
    expect(sQueue.popStack.isEmpty()).toBeFalsy(); // still has one more value
    expect(sQueue.popStack.peek()).toBe(value);
  });
  it('should raise an exception if dequeueing an empty queue', () => {
    sQueue.dequeue();
    expect(sQueue.dequeue()).toBe('Empty Queue!');
    expect(sQueue.popStack.isEmpty()).toBeTruthy();
  });
});
