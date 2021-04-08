'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) this.top = newNode;
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (this.isEmpty()) return 'Empty Stack!';
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) return 'Empty Stack!';
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    var newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) return 'Empty Queue!';
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) return 'Empty Queue!';
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  Stack,
  Queue,
};
