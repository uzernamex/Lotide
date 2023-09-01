const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const assert = require('chai').assert;
// const assertArraysEqualTest = require('../middle');

describe("#assertEqual", () => {
  it("returns true for 1, 1", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
});