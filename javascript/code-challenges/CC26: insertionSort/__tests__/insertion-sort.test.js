'use strict';

const insertionSort = require('../insertion-sort');

describe('Testing insertion-sort', () => {
  it('should sort an array', () => {
    expect(insertionSort([8,4,23,42,16,15])).toStrictEqual([4,8,15,16,23,42]);
  });
  it('should sort reverse-sorted array', () => {
    expect(insertionSort([20,18,12,8,5,-2])).toStrictEqual([-2,5,8,12,18,20]);
  });
  it('should sort an array with a few uniques', () => {
    expect(insertionSort([5,12,7,5,5,7])).toStrictEqual([5,5,5,7,7,12]);
  });
  it('should sort a nearly sorted array', () => {
    expect(insertionSort([2,3,5,7,13,11])).toStrictEqual([2,3,5,7,11,13]);
  });
});
