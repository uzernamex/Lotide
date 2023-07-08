
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
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
