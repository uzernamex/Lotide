
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let control = true;
  for (let key in object1) {
    for (let key2 in object2) {
      if (key === key2) {
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

/*  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let key of keys1) {
    const objectOne = object1[key];
    const objectTwo = object2[key];
    if (Array.isArray(objectOne) && Array.isArray(objectTwo)) {
      if (!eqArrays(objectOne, objectTwo)) {
        return false;
      }
    } else {
      if (objectOne !== objectTwo) {
        return false;
      }
    }
  }
  return true;
};
*/

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion failed: ${inspect(actual)} !== ${inspect(expected) }`);
  }
};

const first = { a: '1', b: 2 };
const second = { b: 2, a: '1' };

assertObjectsEqual(first, second);