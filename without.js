//Function takes 2 parameters and returns new array without the items specified in 'itemsToRemove'.

const without = function(source, itemsToRemove) {
  const result = [];  //initialize result as an empty array.
  for (let i of source) { //iterate through each element of the 'source' array.
    if (!itemsToRemove.includes(i)) {
      result.push(i); //if item is not included in the 'itemsToRemove' then include it in the new array.
    }
  }
  return result;
};

module.exports = without;