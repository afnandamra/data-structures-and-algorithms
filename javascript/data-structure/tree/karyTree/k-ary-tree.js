'use strict';

const { Queue } = require('../../stacksAndQueues/stacks-and-queues');

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }

  breadth() {
    let result = [],
      current;
    let queue = new Queue();
    if (this.root) {
      current = this.root;
      queue.enqueue(current);
    } else return 'Empty Tree!';
    while (!queue.isEmpty()) {
      current = queue.dequeue();
      result.push(current.value);
      for (let i = 0; i < current.children.length; i++)
        if (current.children[i]) {
          queue.enqueue(current.children[i]);
        }
    }
    return result;
  }
}

module.exports = KaryTree;
