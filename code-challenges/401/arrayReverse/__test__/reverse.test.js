'use strict';

const reverseArray = require('../array-reverse');

describe('Testing challenge 1', () => {
  it('It should return an array with reversed order', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6])).toStrictEqual([6, 5, 4, 3, 2, 1]);
    expect(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])).toStrictEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
  });
});
