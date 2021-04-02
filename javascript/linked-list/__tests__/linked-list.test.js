'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  let list = new LinkedList();
  it('should instantiate an empty linked list', () => {
    expect(list.head).toEqual(null);
  });
  it('should add new node to empty linked list', () => {
    list.insert(13);
    expect(list.head.value).toBe(13);
    expect(list.head.next).toBeNull();
  });
  it('should insert new head to existing linked list', () => {
    list.insert(5);
    expect(list.head.value).toBe(5);
    expect(list.head.next.value).toBe(13);
    expect(list.head.next.next).toBeNull();
  });
  it('should find a value anywhere in the linked list', () => {
    list.insert(57);
    expect(list.includes(57)).toBeTruthy();
    expect(list.includes(13)).toBeTruthy();
    expect(list.includes(20)).toBeFalsy();
  });
  it('should convert the linked list to string', () => {
    let emptyList = new LinkedList();
    expect(typeof list.toString()).toBe('string');
    expect(list.toString()).toMatch(/(NULL)/gi);
    expect(list.toString()).toBe('{ 57 } -> {5} -> {13} -> NULL');
    expect(emptyList.toString()).toBe('empty list');
  });
});
