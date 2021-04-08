'use strict';

// Require our linked list implementation
const LinkedList = require('../../linked-list/linked-list');
const zipLists = require('../ll-zip');
let list1 = new LinkedList();
let list2 = new LinkedList();
let emptyList = new LinkedList();

list1.append(10);
list1.append(20);
list1.append(30);
// list1.append(40);

list2.append(15);
list2.append(25);
list2.append(35);
// list2.append(45);

describe('Linked Lists', () => {
  it('make sure lists are initiated', () => {
    expect(list1.head.value).toBe(10);
    expect(list1.head.next.value).toBe(20);
    expect(list1.head.next.next.value).toBe(30);
    expect(list2.head.value).toBe(15);
    expect(list2.head.next.value).toBe(25);
    expect(list2.head.next.next.value).toBe(35);
  });
});

describe('Linked Lists Zip', () => {
  it('make sure lists are zipped correctly', () => {
    expect(zipLists(list1, list2).toString()).toBe('{ 10 } -> { 15 } -> { 20 } -> { 25 } -> { 30 } -> { 35 } -> NULL');
    list1.append(40);
    expect(zipLists(list1, list2).toString()).toBe('{ 10 } -> { 15 } -> { 20 } -> { 25 } -> { 30 } -> { 35 } -> { 40 } -> NULL');
    list2.append(45);
    list2.append(55);
    expect(zipLists(list1, list2).toString()).toBe('{ 10 } -> { 15 } -> { 20 } -> { 25 } -> { 30 } -> { 35 } -> { 40 } -> { 45 } -> { 55 } -> NULL');
    console.log('__list 1__', list1.toString());
    console.log('__list 2__', list2.toString());
    console.log('__zipped list__', zipLists(list1, list2).toString());
  });
  it('should accept empty list but return not empty', () => {
    expect(zipLists(list1, emptyList).toString()).toEqual(list1.toString());
    expect(zipLists(emptyList, list2).toString()).toEqual(list2.toString());
  });
});
