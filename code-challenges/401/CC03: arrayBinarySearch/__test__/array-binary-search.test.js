'use strict';

const binarySearch = require('../array-binary-search');

describe('Testing challenge 2', () => {
  it('It should return a the index of the key if exist in the array', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
    expect(binarySearch([4], 4)).toEqual(0);
  });
  it('It should return -1 if the key does not exist in the array', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);
  });
  it('It should return -1 if the array is empty', () => {
    expect(binarySearch([],5)).toEqual(-1);
  });
});
