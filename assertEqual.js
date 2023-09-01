//Compares two items and retruns a message based on whether or not the actual meets the expected.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
    return true; 
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
    return false; 
  }
};
  
module.exports = assertEqual;