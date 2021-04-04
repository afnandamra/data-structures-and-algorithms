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
        llString += `{ ${strNode.value} } -> `;
      }
      llString += `NULL`;
    }
    return llString;
  }

  append(value){
    var newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
    } else {
      let lastNode = this.head;
      while(lastNode.next) lastNode = lastNode.next;
      lastNode.next = newNode;
    }
  }

  insertBefore(value, newVal){
    var newNode = new Node(newVal);
    if (this.head) {
      // to check if there is a list
      let currentNode = this.head;
      if (currentNode.value === value) {// check the head
        newNode.next = currentNode;
        this.head = newNode;
        return;
      }
      while (currentNode.next) {
        // check the nodes one by one
        if (currentNode.next.value === value) {
          let temp = currentNode.next;
          currentNode.next = newNode;
          newNode.next = temp;
          // newNode.next = currentNode;
          // currentNode = newNode;
          // console.log(currentNode.value, currentNode.next.value, currentNode.next.next.value);
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
    }
    return 'Value doesn\'t exist';
  }

  insertAfter(value, newVal){
    let newNode = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
    return 'Value doesn\'t exist';
  }
}

module.exports = LinkedList;
