const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([12, 2, 3], [1, 2, 3]);


const assert = require('chai').assert;
const assertArraysEqualTest = require('../assertArraysEqual');

describe("#assertArraysEqual"), () => {
  it("returns true for ([1, 2, 3], [1, 2, 3])"); () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  };


it("returns '5' for ['5']", () => {
  assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3])); 
})
};