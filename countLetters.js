const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

const countLetters = function(string) {
  const results = {};
  for (const stringLetter of string) {
    if (stringLetter !== " ") {
      if (results[stringLetter]) {
        results[stringLetter] += 1;
      } else {
        results[stringLetter] = 1;
      }
    }
  }
  return results;
};


console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));