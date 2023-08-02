const assertEqualTest = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const assert = require('chai').assert;
const assertArraysEqualTest = require('../middle');

describe("#assertEqual", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(assertEqual([1, 2, 3]), 2);
  });
});
it("returns '5' for ['5']", () => {
  assert.strictEqual(assertEqual(['5']), '5'); 
});