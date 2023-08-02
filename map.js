const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(results, callback) {
  if (map(results, callback)) {
    console.log("✅ Assertion Correct! ⭐️ These values are a match ✅");
  } else {
    console.log("❌ False Assertion; These values are not a match ❌");
  }
};
console.log(assertArraysEqual);


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);