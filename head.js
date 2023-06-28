/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};
*/

const head = function(array){

  return array.slice(-1);
}

console.log(head([4, 8, 2, 6]));

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");