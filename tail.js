/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};
*/

const tail = function(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array.slice(1))
  }
};

console.log(tail([5, 4, 2, 7, 2]));