'use strict';

const LinkedList = require('../../data-structure/linked-list/linked-list');
// const Node = require('../linked-list/node');

function zipLists(list1, list2) {
  // create new list
  let newList = new LinkedList();

  // check empty lists
  let currentlist1, currentlist2;
  if (list1.head) currentlist1 = list1.head;
  else return list2.toString();
  if (list2.head) currentlist2 = list2.head;
  else return list1.toString();

  // append head and second values
  newList.append(currentlist1.value);
  newList.append(currentlist2.value);
  currentlist1 = currentlist1.next;
  currentlist2 = currentlist2.next;

  // append values while exists
  while (currentlist1 || currentlist2) {
    if (currentlist1 && currentlist2) {
      newList.append(currentlist1.value);
      newList.append(currentlist2.value);
      currentlist1 = currentlist1.next;
      currentlist2 = currentlist2.next;
    } else if (currentlist1) {
      newList.append(currentlist1.value);
      currentlist1 = currentlist1.next;
    } else if (currentlist2) {
      newList.append(currentlist2.value);
      currentlist2 = currentlist2.next;
    }
  }
  return newList;
}

module.exports = zipLists;
