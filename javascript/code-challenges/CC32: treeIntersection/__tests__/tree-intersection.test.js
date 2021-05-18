'use strict';

const Node = require('../../../data-structure/tree/node');
const { BinaryTree } = require('../../../data-structure/tree/tree');
const treeIntersection = require('../tree-intersection');

describe('Tree Intersection Test', () => {
  let tree1,tree2, tree3;
  beforeAll(()=>{
    const one1 = new Node(150);
    const two1 = new Node(100);
    const three1 = new Node(250);
    const four1 = new Node(75);
    const five1 = new Node(160);
    const six1 = new Node(200);
    const seven1 = new Node(350);
    const eight1 = new Node(125);
    const nine1 = new Node(175);
    const ten1 = new Node(300);
    const eleven1 = new Node(500);
    one1.left = two1;
    one1.right = three1;
    two1.left = four1;
    two1.right = five1;
    three1.left = six1;
    three1.right = seven1;
    five1.left = eight1;
    five1.right = nine1;
    seven1.left = ten1;
    seven1.right = eleven1;
    tree1 = new BinaryTree(one1);

    const one2 = new Node(42);
    const two2 = new Node(100);
    const three2 = new Node(600);
    const four2 = new Node(15);
    const five2 = new Node(160);
    const six2 = new Node(200);
    const seven2 = new Node(350);
    const eight2 = new Node(125);
    const nine2 = new Node(175);
    const ten2 = new Node(4);
    const eleven2 = new Node(500);
    one2.left = two2;
    one2.right = three2;
    two2.left = four2;
    two2.right = five2;
    three2.left = six2;
    three2.right = seven2;
    five2.left = eight2;
    five2.right = nine2;
    seven2.left = ten2;
    seven2.right = eleven2;
    tree2 = new BinaryTree(one2);

    const one3 = new Node(1);
    const two3 = new Node(2);
    const three3 = new Node(3);
    const four3 = new Node(4);
    const five3 = new Node(5);
    const six3 = new Node(6);
    const seven3 = new Node(7);
    const eight3 = new Node(8);
    const nine3 = new Node(9);
    const ten3 = new Node(10);
    const eleven3 = new Node(11);
    one3.left = two3;
    one3.right = three3;
    two3.left = four3;
    two3.right = five3;
    three3.left = six3;
    three3.right = seven3;
    five3.left = eight3;
    five3.right = nine3;
    seven3.left = ten3;
    seven3.right = eleven3;
    tree3 = new BinaryTree(one3);
  });
  it('can return a set of values found in both trees', () => {
    expect(treeIntersection(tree1, tree2)).toEqual([100,160,125,175,200,350,500]);
  });
  it('can return a set of values found in both trees', () => {
    expect(treeIntersection(tree2, tree3)).toEqual([4]);
  });
  it('return an exception if the trees values are unique', () => {
    expect(treeIntersection(tree1, tree3)).toEqual('No Intersected values');
  });
});
