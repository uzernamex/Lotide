const findKeyByValue = function(object, value) {
  const result = [];
  for (let key in object) { //iterate through each key in the object using for-in loop
    if (object[key] === value) {
      return value; //if the key is the same as the value then return as the result.
    } else {
      return undefined;
    }
  }
  return result;
};

module.exports = findKeyByValue;