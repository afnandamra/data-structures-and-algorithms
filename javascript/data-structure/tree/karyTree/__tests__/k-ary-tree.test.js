'use strict';

const Node = require('../k-ary-node');
const KaryTree = require('../k-ary-tree');

describe('Binary Tree', () => {
  let tree;
  const one = new Node(1, 3);
  const two = new Node(2, 3);
  const three = new Node(3, 3);
  const four = new Node(4, 3);
  const five = new Node(5, 3);
  const six = new Node(6, 3);
  const seven = new Node(7, 3);
  const eight = new Node(8, 3);
  const nine = new Node(9, 3);
  const ten = new Node(10, 3);

  one.children[0] = two;
  one.children[1] = three;
  one.children[2] = four;
  two.children[0] = five;
  two.children[1] = six;
  two.children[2] = seven;
  three.children[0] = eight;
  three.children[1] = nine;
  four.children[0] = ten;

  it('can successfully instantiate a new kary tree', () => {
    tree = new KaryTree(3);
    expect(tree.breadth()).toBe('Empty Tree!');
  });
  it('can successfully instantiate a new kary tree', () => {
    let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    tree.root = one;
    expect(tree.breadth()).toEqual(expected);
  });
});
