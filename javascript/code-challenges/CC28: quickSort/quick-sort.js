'use strict';

module.exports = function quickSort(arr, left, right) {
  if (left >= right) return;
  let position = partition(arr, left, right);

  quickSort(arr, left, position - 1);
  quickSort(arr, position + 1, right);

  return arr;
};

function partition(arr, left, right) {
  let pivot = arr[right];

  let low = left - 1;
  for (let i = left; i <= right; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, ++low);
    }
  }
  return low;
}
function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
