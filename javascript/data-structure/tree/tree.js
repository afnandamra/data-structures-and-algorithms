'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues');
const Node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const results = [];
    const _traverse = (node) => {
      results.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      results.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);
    return results;
  }

  getMax() {
    if (!this.root) return 'Empty Tree!';
    let max = this.root.value;
    let arr = this.inOrder();
    arr.forEach((val) => {
      if (val > max) max = val;
    });
    return max;
  }

  // breadth() {
  //   const results = [];
  //   let queue = new Queue();
  //   if (this.root) queue.enqueue(this.root);
  //   else return 'Empty Tree!';
  //   const _traverse = (node) => {
  //     results.push(node.value);
  //     if (node.left) queue.enqueue(node.left);
  //     if (node.right) queue.enqueue(node.right);
  //     if(!queue.isEmpty()) _traverse(queue.dequeue());
  //   };
  //   _traverse(queue.dequeue());
  //   return results;
  // }

  breadth() {
    let results = [];
    let queue = new Queue();
    if (this.root) queue.enqueue(this.root);
    else return 'Empty Tree!';
    while (!queue.isEmpty()) {
      let front = queue.dequeue();
      results.push(front.value);
      if(front.left) queue.enqueue(front.left);
      if(front.right) queue.enqueue(front.right);
    }
    return results;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    let newNode = new Node(value);
    // empty tree
    if (this.root === null) {
      this.root = newNode;
      //   return;
    }
    const _traverse = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          //   return;
        }
        _traverse(node.left);
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
          //   return;
        }
        _traverse(node.right);
      }
    };
    _traverse(this.root);
  }

  contains(value) {
    if (this.root === null) return 'Empty Tree!';
    let current = this.root;
    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else return true;
    }
    return false;
  }
}

module.exports = { BinaryTree, BinarySearchTree };
