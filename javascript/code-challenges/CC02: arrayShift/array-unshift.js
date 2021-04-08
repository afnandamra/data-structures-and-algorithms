'use strict';

module.exports = function unShiftArray(arr) {
  let newArr = [];
  let middleIndex = Math.floor(arr.length / 2);
  for (let i = 0; i < middleIndex; i++) {
    newArr.push(arr[i]);
  }
  for (let j = middleIndex + 1; j < arr.length; j++) {
    newArr.push(arr[j]);
  }
  return newArr;
};
