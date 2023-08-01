const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`[✅⭐️💚] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`[❌🤬❌] Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//const multiColorShirtObject = { colors: "red", size: "medium" };
//const anotherMultiColorShirtObject = { size: "medium", colors: "red" };
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false)