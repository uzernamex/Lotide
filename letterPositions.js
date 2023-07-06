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

//implement a new function which will return all the indices in the string 
//where each character is found.

//For each letter, multiple numbers may be needed to represent 
//all the places in the string that it shows up.




const letterPositions = function(sentence) {
  const results = {};
  for (let position of sentence) {
    if (sentence[position]) {
      (sentence[position]) += 1; 
    } else {
      sentence[position] = 1; 
    }
  }  
  return results;
};




assertArraysEqual(letterPositions(("hello").e, [1]), true); 
