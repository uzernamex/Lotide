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
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([12, 2, 3], [1, 2, 3]);