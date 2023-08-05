const flatten = function(arr) {
  const newArray = []; //initialize empty array to store variables.
  for (let i of arr) { // iterate through elements with for-of loop
    if (Array.isArray(i)) { //if type is an array and variable is present in array..
      newArray.push(i); //return as element in the new array
    }
  }
  return newArray;
};

module.exports = flatten;