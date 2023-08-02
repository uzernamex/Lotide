const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const eqArraysTest = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns === for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3]), [1, 2, 3/]);
  });
});
it("returns '5' for ['5']", () => {
  assert.strictEqual(eqArrays(['5']), '5'); 
});

/* assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([0, 1, 3], ["0", "one", 33]), false);

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
*/