'use strict';

const insertShiftArray = require('../array-shift');
const unShiftArray = require('../array-unshift');


describe('Testing challenge 2', () => {
  it('It should insert an input value into the middle of an array', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });
  it('It should remove a value from the middle of an array', () => {
    expect(unShiftArray([2,4,5,6,8])).toStrictEqual([2,4,6,8]);
    expect(unShiftArray([4,8,15,16,23,42])).toStrictEqual([4,8,15,23,42]);
  });
});
