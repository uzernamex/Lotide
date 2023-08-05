//This code returns the middlemose element of a given array.
const middle = function(arr) {
  if (arr.length < 2) {
    return []; // returns and empty array if there are less than 2 elements.
  }
  const middlemost = Math.floor(arr.length / 2); //splits the array in half to reach mid-point.
  if (arr.length % 2 === 0) { // if even amount of elements in array..
    return [arr[middlemost - 1], arr[middlemost]];// return the two items in the middle.
  } else {
    return [arr[middlemost]];// if odd, return just the middle element in the array.
  }
};

module.exports = middle;