const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("[❌🤬❌] Assertion Failed: The arrays are not a match💔);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    console.log("[❌🤬❌] Assertion Failed: The arrays are not a match💔);
    }
  }
  console.log("[✅⭐️💚] Assertion Passed: The arrays are a match!💚")
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    c
  }
};
const eqArrays = function(arr1, arr2) {
 
}
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([0, 1, 3], ["0", "one", 33]), false);

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false