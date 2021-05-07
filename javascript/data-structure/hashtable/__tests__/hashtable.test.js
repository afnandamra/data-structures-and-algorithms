'use strict';

const HashTable = require('../hashtable');
let hashTable = new HashTable(50);

// unique hashes
// console.log(hashTable.hash('Mercer Island'));
// console.log(hashTable.hash('Pioneer Square'));
// console.log(hashTable.hash('U District'));
// console.log(hashTable.hash('Alki Beach'));
// console.log(hashTable.hash('Downtown'));
// console.log(hashTable.hash('International District'));
// console.log(hashTable.hash('hi'));
// console.log(hashTable.hash('hello'));
// console.log(hashTable.hash('afnan'));
// console.log(hashTable.hash('bye'));

// have the same hash
// console.log(hashTable.hash('damra'));
// console.log(hashTable.hash('name'));

describe('Hash Table', () => {
  it('should create a hashed table', () => {
    let hashTable = new HashTable(50);
    expect(hashTable.table.length).toEqual(50);
  });
  it('should hash a key properly', () => {
    let key = 'Pioneer Square';
    expect(hashTable.hash(key)).toBeLessThanOrEqual(50);
  });
  it('should add to the hashed table', () => {
    let key = 'Pioneer Square';
    hashTable.add(key, 98104);
    expect(hashTable.table[hashTable.hash(key)]).toBeDefined();
  });
  it('should find if the value exists in the table by it is key', () => {
    let key = 'Alki Beach';
    hashTable.add(key, 98116);
    expect(hashTable.contains(key)).toBeTruthy();
    expect(hashTable.contains('U District')).toBeFalsy();
  });
  it('should get the value of a key if it exists in the table', () => {
    let key = 'Alki Beach';
    let value = 98116;
    hashTable.get(key);
    expect(hashTable.get(key)).toEqual(value);
  });
  it('should return null if the key is not in the table', () => {
    expect(hashTable.get('U District')).toBeNull();
  });
  it('should handle a collision within the hashtable', () => {
    const key1 = 'damra';
    const key2 = 'name';
    const val1 = 757;
    const val2 = 98;
    hashTable.add('damra', val1);
    hashTable.add('name', val2);
    expect(hashTable.contains(key1)).toBeTruthy();
    expect(hashTable.contains(key2)).toBeTruthy();
    expect(hashTable.get(key1)).toEqual(val1);
    expect(hashTable.get(key2)).toEqual(val2);
  });
});
