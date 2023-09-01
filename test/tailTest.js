const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});
it("returns '[]' for [5]", () => {
  assert.deepEqual(tail([5]), []); 
});

/*

// Test Case 1: Check the original array
const result1 = ["Yo Yo", "Lighthouse", "Labs"];
tail(result1); // no need to capture the return value since we are not checking it
assertEqual(result1.length, 3); // original array should still have 3 elements!

// Test Case 2: Check the original array
const result2 = [333, 808, 416, 905, 6];
tail(result2);
assertEqual(result2.length, 5);

const result4 = [4];
tail(result4);

assertEqual(result4.length, 1);

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the returned array elements
const result3 = tail([18, 99, 1992, 42, 24]);
assertEqual(result3.length, 4);
assertEqual(result3[0], 99);
assertEqual(result3[1], 1992);
assertEqual(result3[2], 42);
assertEqual(result3[3], 24);

const result5 = tail([8]);
assertEqual(result5.length, 0);
*/