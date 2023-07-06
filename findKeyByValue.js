const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

//Implement the function findKeyByValue which takes in an object and a value. 
//It should scan the object and return the first key which contains the given value. 
//If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  const result = object[]
  for (let key in object) {
    if (object[key] === value) {
      return key;

    } else {
      return undefined
    }
  } 
  return result;
};