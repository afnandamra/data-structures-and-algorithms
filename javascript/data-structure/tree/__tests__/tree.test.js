'use strict';

const Node = require('../node');
const { BinaryTree, BinarySearchTree } = require('../tree');

describe('Binary Tree', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
  });
  it('can successfully instantiate an empty tree', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });
  it('can successfully instantiate a tree with a single root node', () => {
    const value = 8;
    const rootNode = new Node(value);
    const newTree = new BinaryTree(rootNode);
    expect(newTree.root.value).toEqual(value);
  });
  it('can successfully add a left child and right child to a single root node', () => {
    const root = 3;
    const left = 5;
    const right = 7;
    const rootNode = new Node(root);
    const leftNode = new Node(left);
    const rightNode = new Node(right);
    rootNode.left = leftNode;
    rootNode.right = rightNode;
    const newTree = new BinaryTree(rootNode);
    expect(newTree.root.left.value).toEqual(left);
    expect(newTree.root.right.value).toEqual(right);
  });
  it('can successfully return a collection from a preorder traversal', () => {
    const expected = [1, 2, 4, 5, 8, 3, 6, 7];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('can successfully return a collection from an inorder traversal', () => {
    const expected = [4, 2, 8, 5, 1, 6, 3, 7];
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });
  it('can successfully return a collection from a postorder traversal', () => {
    const expected = [4, 8, 5, 2, 6, 7, 3, 1];
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });
  it('can get maximum value in a tree', () => {
    expect(tree.getMax()).toEqual(8);
  });
  it('returns an exception if tried to get maximum value of empty tree', () => {
    let newTree = new BinaryTree();
    expect(newTree.getMax()).toBe('Empty Tree!');
  });
  it('can successfully return a collection from a breadth traversal', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const breadth = tree.breadth();
    expect(breadth).toEqual(expected);
  });
  it('returns an exception if tried to return a collection from a breadth of empty tree', () => {
    let newTree = new BinaryTree();
    expect(newTree.breadth()).toBe('Empty Tree!');
  });
});

describe('Binary Search Tree', () => {
  let tree = new BinarySearchTree();
  it('can successfully instantiate an empty tree', () => {
    expect(tree.root).toBeNull();
  });
  it('can successfully instantiate a tree with a single root node', () => {
    const value = 15;
    const rootNode = new Node(value);
    const newTree = new BinarySearchTree(rootNode);
    expect(newTree.root.value).toEqual(value);
  });
  it('can successfully add a root node to existing empty tree', () => {
    const value = 8;
    tree.add(value);
    expect(tree.root.value).toEqual(value);
  });
  it('can successfully add a left child and right child to a single root node', () => {
    const left = 3;
    const right = 12;
    tree.add(left);
    tree.add(right);
    expect(tree.root.left.value).toEqual(left);
    expect(tree.root.right.value).toEqual(right);
  });
  it('can successfully add a new node in the correct location in the binary search tree', () => {
    tree.add(6);
    tree.add(10);
    // console.log(tree.root);
    expect(tree.root.left.right.value).toEqual(6);
    expect(tree.root.right.left.value).toEqual(10);
  });
  it('can successfully search for a value in the tree', () => {
    expect(tree.contains(3)).toBeTruthy();
    expect(tree.contains(12)).toBeTruthy();
    expect(tree.contains(15)).toBeFalsy();
  });
  it('returns an exception if tried to search in empty tree', () => {
    const newTree = new BinarySearchTree();
    expect(newTree.contains(1)).toBe('Empty Tree!');
  });
});
