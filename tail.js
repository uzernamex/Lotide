//This function takes in an array and returns a copy of that array with the first element omitted.
const tail = function(array) {
  for (let i = 0; i < array.length; i++) {
    const result = array.slice(1); //return the elements in the array starting at position '1' instead of '0'.
    return result;
  }
};

module.exports = tail;