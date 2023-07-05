const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

//Perhaps this function could return an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.
//Remember that we can skip and not count spaces, as seen here.
//You can use for...of loops with strings.

const countLetters = function() {
  
}