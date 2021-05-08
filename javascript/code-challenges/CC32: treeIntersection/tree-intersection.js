'use strict';

function treeIntersection(tree1, tree2) {
  const treeOneArray = tree1.preOrder();
  const treeTwoArray = tree2.preOrder();
  const result = treeOneArray.filter(val => treeTwoArray.includes(val));
  return result;
}

module.exports = treeIntersection;
