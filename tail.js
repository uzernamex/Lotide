const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

const tail = function(array) {
  const result = array.slice(1);
  return result 
};

//assertEqual(console.log(tail([5, 4, 2, 7, 2])));
//assertEqual (console.log(tail([1, 2, 3, 4, 5, 6, 7, 8, 9])));
// 


//const result1 = tail([7, 2, 3, 4, 8])
tail 
// Test Case: Check the original array 
const result1 = ["Yo Yo", "Lighthouse", "Labs"];
tail(result1); // no need to capture the return value since we are not checking it
assertEqual(result1.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

