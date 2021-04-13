'use strict';

function multiBracketValidation(str) {
  str = str.match(/[()[\]{}]/g); // returns array
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      arr.push(str[i]);
    } else {
      let last = arr.pop();
      if (str[i] !== brackets[last]) return false;
    }
  }
  if (arr.length !== 0) return false;
  return true;
  // str.forEach((bracket) => {
  //   if (bracket === '(' || bracket === '{' || bracket === '[') {
  //     arr.push(bracket);
  //   } else {
  //     let last = arr.pop();
  //     if (brackets[last] !== bracket) return false;
  //   }
  // });
  // if (arr.length !== 0) return false;
  // return true;
}

module.exports = multiBracketValidation;
