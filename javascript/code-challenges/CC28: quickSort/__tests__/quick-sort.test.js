'use strict';

const quickSort = require('../quick-sort');

describe('Testing quick-sort', () => {
  it('should sort an array', () => {
    let arr = [8,4,23,42,16,15];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([4,8,15,16,23,42]);
  });
  it('should sort reverse-sorted array', () => {
    let arr = [20,18,12,8,5,-2];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([-2,5,8,12,18,20]);
  });
  it('should sort an array with a few uniques', () => {
    let arr = [5,12,7,5,5,7];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([5,5,5,7,7,12]);
  });
  it('should sort a nearly sorted array', () => {
    let arr = [2,3,5,7,13,11];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([2,3,5,7,11,13]);
  });
});
