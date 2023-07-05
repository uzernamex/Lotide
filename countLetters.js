const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("[✅⭐️💚] Assertion Passed: `${actual}` === `${expected}");
  } else {
    console.log("[❌🤬❌] Assertion Failed: `${actual} !== `${expected}");
  }
};

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

//We need it report back multiple numbers.

//return an object where each unique character in the string is the KEY 
//&& the number of occurrences of that character is the VALUE of that key.
//we can skip and not count spaces, as seen here.
//can use for...of loops with strings.

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter !== " ") {      
      return letter += 1; 
    } else {
      return letter = 1;
    }
  
  }
  console.log({ string: [letter] })
}

console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));