const assertArraysEqual = function(arr1, arr2) { 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      console.log("[❌🤬❌] Assertion Failed: The arrays are not a match💔");
    }
    if (arr1[i] === arr2[i]) {
      console.log("[✅⭐️💚] Assertion Passed: The arrays are a match!💚");
    }
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([12, 2, 3], [1, 2, 3]);