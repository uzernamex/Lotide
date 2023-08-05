//Transforms each element of an array
const map = function(array, callback) {
  const results = []; //init empty array as result.
  for (let item of array) { // iterate through array with for of loop.
    results.push(callback(item));
  }
  return results;
};

module.exports = map;