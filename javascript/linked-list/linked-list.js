'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  includes(value) {
    if (this.head) {
      // to check if there is a list
      let searchNode = this.head;
      if (searchNode.value === value) return true; // check the head
      while (searchNode.next) {
        // check the nodes one by one
        searchNode = searchNode.next;
        if (searchNode.value === value) return true;
      }
    }
    return false;
  }

  toString() {
    let llString = '';
    if (!this.head) llString = 'empty list';
    else {
      let strNode = this.head;
      llString = `{ ${strNode.value} } -> `;
      while (strNode.next) {
        strNode = strNode.next;
        llString += `{${strNode.value}} -> `;
      }
      llString += `NULL`;
    }
    return llString;
  }
}

module.exports = LinkedList;
