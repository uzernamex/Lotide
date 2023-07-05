const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};



// countOnly will be given an array and an object. 
//It will return an object containing counts of everything that the input object listed.
//As shown in the example image above, only keys which have a truthy value should be counted in the resulting object. 
//All other strings (either set to false or not included at all in the object) should not be counted. 
//if a particular string is meant to be counted but does not exist in the input array does not have to be included in the final count.
//The function should report back how many instances of each string were found in the allItems array of strings.



const countOnly = function(allItems, itemsToCount) {
  const results = {};
  return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);