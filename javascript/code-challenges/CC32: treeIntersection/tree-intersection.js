'use strict';

const HashTable = require('../../data-structure/hashtable/hashtable');

function treeIntersection(tree1, tree2) {
  let results = [];
  const hashtable = new HashTable(2048);
  const treeOneArray = tree1.preOrder();
  for(let i=0;i<treeOneArray.length;i++){
    if (!hashtable.contains(treeOneArray[i].toString())) {
      hashtable.add(treeOneArray[i].toString(), treeOneArray[i]);
    }
  }
  const treeTwoArray = tree2.preOrder();
  for(let i=0;i<treeTwoArray.length;i++){
    if (hashtable.contains(treeTwoArray[i].toString())) {
      results.push(treeTwoArray[i]);
    }
  }
  return results.length > 0 ? results : 'No Intersected values';
}

module.exports = treeIntersection;
