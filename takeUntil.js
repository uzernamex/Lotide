//This function returns a new array with the elements until the specified element in the callback is present.
const takeUntil = function(array, callback) {
  // init empty array.
  const result = [];
  for (let item of array) {
    // uses a for loop to iterate through the given array.
    if (!callback(item)) {
      result.push(item);
      //if the condition is not met then add to result.
    } else {
      return result; //otherwise, do not add to result, just return the included elements.
    }
  }
  return result;
};

module.exports = takeUntil;