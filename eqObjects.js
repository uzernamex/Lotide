const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

const eqObjects = function(object1, object2) {
  if (object1[key].length !== object2[key].length) {
    return false;
  }
  for (let i = 0; i < object1[key].length; i++) {
    const objectOne = object1[key];
    const objectTwo = object2[key];
    if (Array.isArray(object1) && Array.isArray(object2)) {
      if (!eqArrays(objectOne, objectTwo)) {
        return false;
      }
    } else {
      if (object1 !== object2) {
        return false;
      }
    }
    if (object1[key] === object2[key]) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(assertEqual(eqObjects({one: 1, two: 2, three: 3}), ({one: 1, two: 2, three: 3}), true));

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)), false); // => false)