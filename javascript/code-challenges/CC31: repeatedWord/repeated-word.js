'use strict';

const HashTable = require('../../data-structure/hashtable/hashtable');

function repeatedWord(string) {
  // let wordsArr = string.split(' ');
  const wordsArr = string.match(/\w+/g);
  let hashTable = new HashTable(wordsArr.length);

  for (let i = 0; i < wordsArr.length; i++) {
    let key = wordsArr[i].toLowerCase();
    if (hashTable.contains(key)) {
      if (hashTable.get(key) === key) return hashTable.get(key);
    }
    hashTable.add(key, key);
  }
  // wordsArr.forEach(word => {
  //   let key = word.toLowerCase();
  //   if (hashTable.contains(key)) {
  //     // console.log(hashTable.get(key), word, hashTable.get(key) === word);
  //     if (hashTable.get(key) === key) return hashTable.get(key);
  //   }
  //   hashTable.add(key, key);
  // });

  return 'All words are unique!';
}

module.exports = repeatedWord;
