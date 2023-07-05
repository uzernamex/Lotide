//We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
const assertArraysEqual = function(arr1, arr2) { 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("[❌🤬❌] The arrays are not a match💔");
      return;
    }
  }
    console.log("[✅⭐️💚] The arrays are a match!💚")
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
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


assertEqual(eqArrays(["hello"], {[1, 2, 3]}), true); 

  

const letterPositions = function() {
  const results = {};
  return results;
};

