'use strict';

const Node = require('../node');

describe('Node test', () => {
  it('should initiate node class', () => {
    let node = new Node(26);
    expect(node.value).toEqual(26);
    expect(node.next).toEqual(null);
  });
});
