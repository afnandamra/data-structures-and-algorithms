'use strict';

const mergeSort = require('../merge-sort');

describe('Testing merge-sort', () => {
  it('should sort an array', () => {
    expect(mergeSort([8,4,23,42,16,15])).toStrictEqual([4,8,15,16,23,42]);
  });
  it('should sort reverse-sorted array', () => {
    expect(mergeSort([20,18,12,8,5,-2])).toStrictEqual([-2,5,8,12,18,20]);
  });
  it('should sort an array with a few uniques', () => {
    expect(mergeSort([5,12,7,5,5,7])).toStrictEqual([5,5,5,7,7,12]);
  });
  it('should sort a nearly sorted array', () => {
    expect(mergeSort([2,3,5,7,13,11])).toStrictEqual([2,3,5,7,11,13]);
  });
});
