/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
*/

const middle = function(arr) {
  if (arr.length < 2) {
    return [];
  }
  const middlemost = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[middlemost -1], arr[middlemost]];
  } else {
    return [arr[middlemost]];
  }
};