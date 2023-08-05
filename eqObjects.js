//Compares 2 objects and checks for equality
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { //if the lengths are not the same, return false.
    return false;
  }
  let control = true;
  for (let key in object1) {
    for (let key2 in object2) {
      if (key === key2) { //if the spocified keys match, continue to next step.
        if (object1[key] === object2[key2]) {//if object 1 key matches object 2 key2, then = true.
          control = true;
        } else {
          control = false;
        }
      }
    }
  }
  return control;
};

module.exports = eqObjects;