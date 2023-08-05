//An assertion is printed to the console specifying whether or not the objects are equal.
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let control = true;
  for (let key in object1) {
    for (let key2 in object2) {
      if (key === key2) { //if both keys in the object are equal, then true.
        if (object1[key] === object2[key2]) {
          control = true;
        } else {
          control = false;
        }
      }
    }
  }
  return control;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) { //next lines specify the message to presented re: equality.
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion failed: ${inspect(actual)} !== ${inspect(expected) }`);
  }
};

module.exports = assertObjectsEqual;