'use strict';

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
