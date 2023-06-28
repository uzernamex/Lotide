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
    const result = array.slice(1);
  
  return result}
};

console.log(tail([5, 4, 2, 7, 2]));