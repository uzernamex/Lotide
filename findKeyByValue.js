const findKeyByValue = function(object, value) {
  const result = [];
  for (let key in object) {
    if (object[key] === value) {
      return value;
    } else {
      return undefined;
    }
  }
  return result;
};

module.exports = findKeyByValue;
