'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('Multi Bracket Validation Test', () => {
  it('should return true when called if the brackets in the string are balanced', () => {
    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });
  it('should return false when called if the brackets in the string are not balanced', () => {
    expect(multiBracketValidation(')(')).toBeFalsy();
    expect(multiBracketValidation('[({}]')).toBeFalsy();
    expect(multiBracketValidation('(](')).toBeFalsy();
    expect(multiBracketValidation('{(})')).toBeFalsy();
  });
});
