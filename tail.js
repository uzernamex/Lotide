/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};
*/

const tail = function(array) {
  const result = array.slice[1];
  return result;
}

console.log (tail([5, 4, 2, 7, 2]));