'use strict';

// const Node = require('../stacksAndQueues/node');
const { Stack } = require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor() {
    // this.front = null;
    // this.rear = null;
    this.popStack = new Stack(); // front
    this.pushStack = new Stack(); // rear
  }

  enqueue(value) {
    // var newNode = new Node(value);
    // if (this.pushStack.isEmpty()) {
    //   this.front = newNode;
    //   this.rear = newNode;
    //   this.pushStack.push(value);
    // } else {
    //   this.rear.next = newNode;
    //   this.rear = newNode;
    //   this.pushStack.push(value);
    // }
    this.pushStack.push(value);
  }

  dequeue() {
    if (this.popStack.isEmpty() && this.pushStack.isEmpty())
      return 'Empty Queue!';
    // let temp = this.front;
    // this.front = temp.next;
    // temp.next = null;
    if (this.popStack.isEmpty()) {
      while (!this.pushStack.isEmpty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
}

module.exports = PseudoQueue;
