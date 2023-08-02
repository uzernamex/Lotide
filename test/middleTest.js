const assert = require('chai').assert;
const middleTest = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
});
it("returns '5' for ['5']", () => {
  assert.strictEqual(middle(['5']), '5'); 
});