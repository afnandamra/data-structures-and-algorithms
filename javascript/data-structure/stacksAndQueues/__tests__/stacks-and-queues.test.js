'use strict';

// Require our Stack and Queue implementation
const {Stack, Queue} = require('../stacks-and-queues');
const stack = new Stack();
const queue = new Queue();

describe('Stack Test', () => {
  it('should instantiate an empty stack', () => {
    expect(stack.top).toBeNull();
  });
  it('should sheck if a stack is empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('should push to existing stack', () => {
    let value = 10;
    stack.push(value);
    expect(stack.top.value).toEqual(value);
    expect(stack.top.next).toBeNull();
  });
  it('should pop from existing stack', () => {
    let value = 20;
    stack.push(value);
    expect(stack.top.value).toEqual(value);
    expect(stack.pop()).toEqual(value);
  });
  it('should peek the top value of an existing stack', () => {
    expect(stack.peek()).toEqual(10);
  });
  it('should sheck if a stack is empty', () => {
    expect(stack.isEmpty()).toBeFalsy();
  });
  it('should raise an exception if poping an empty stack', () => {
    stack.pop();
    expect(stack.pop()).toBe('Empty Stack!');
  });
  it('should raise an exception if peeking an empty stack', () => {
    expect(stack.peek()).toBe('Empty Stack!');
  });
});

describe('Queue Test', () => {
  it('should instantiate an empty queue', () => {
    expect(queue.front).toBeNull();
  });
  it('should sheck if a queue is empty', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
  it('should enqueue to existing queue', () => {
    let value = 10;
    queue.enqueue(value);
    expect(queue.front.value).toEqual(value);
    expect(queue.front.next).toBeNull();
  });
  it('should dequeue from existing queue', () => {
    let value = 20;
    queue.enqueue(value);
    expect(queue.front.next.value).toEqual(value);
    expect(queue.dequeue()).toEqual(10);
  });
  it('should peek the top value of an existing queue', () => {
    expect(queue.peek()).toEqual(20);
  });
  it('should sheck if a queue is empty', () => {
    expect(queue.isEmpty()).toBeFalsy();
  });
  it('should raise an exception if dequeueing an empty queue', () => {
    queue.dequeue();
    expect(queue.dequeue()).toBe('Empty Queue!');
  });
  it('should raise an exception if peeking an empty queue', () => {
    expect(queue.peek()).toBe('Empty Queue!');
  });
});
