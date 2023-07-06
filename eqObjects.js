const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

// Returns true if both objects have identical keys with identical values.
// Else: false

const eqObjects = function(object1, object2) {
const result = ""
for (let key1 of object1) {
  for (let key2 of object2)
  if (key1 === key2) {
    return true
  } else {
    return false
  }
}
return result;
};

console.log(assertEqual(eqObjects({one: 1, two: 2, three: 3}), ({one: 1, two: 2, three: 3})));

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject))); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject))); // => false
