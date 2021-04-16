'use strict';

class Node {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k);
  }
}

module.exports = Node;
