'use strict';

const {
  Queue,
} = require('../../data-structure/stacksAndQueues/stacks-and-queues');
const KaryTree = require('../../data-structure/tree/karyTree/k-ary-tree');

function FizzBuzzTree(tree) {
  let newTree = new KaryTree(tree.k);
  newTree.root = tree.root;
  let queue = new Queue();
  if (newTree.root) queue.enqueue(newTree.root);
  else return 'Empty Tree!';
  const _traverse = (node) => {
    if (node.value % 15 === 0) node.value = 'FizzBuzz';
    else if (node.value % 3 === 0) node.value = 'Fizz';
    else if (node.value % 5 === 0) node.value = 'Buzz';
    else node.value = node.value.toString();
    for (let i = 0; i < node.children.length; i++){
      if (node.children[i]) {
        queue.enqueue(node.children[i]);
      }
    }
    if(!queue.isEmpty()) _traverse(queue.dequeue());
  };
  _traverse(queue.dequeue());
  return newTree;
}

module.exports = FizzBuzzTree;
