const countLetters = function(string) {
  const results = {};
  for (const stringLetter of string) {
    if (stringLetter !== " ") { //if the element is not a space
      if (results[stringLetter]) { //use if-condition to check if the results are a character and add to the count.
        results[stringLetter] += 1;
      } else {
        results[stringLetter] = 1; //if the previous conditions are not met do not add to the count.
      }
    }
  }
  return results;
};

module.exports = countLetters;