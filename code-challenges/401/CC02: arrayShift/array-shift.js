'use strict';

module.exports = function insertShiftArray(arr, val) {
  let newArr = [];
  let middleIndex = Math.ceil(arr.length / 2);
  for (let i = 0; i < middleIndex; i++) {
    newArr[i] = arr[i];
  }
  newArr[middleIndex] = val;
  for (let j = middleIndex; j < arr.length; j++) {
    newArr[j + 1] = arr[j];
  }
  return newArr;
};
