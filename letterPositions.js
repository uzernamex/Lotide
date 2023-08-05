//Function returns the location of a character in a given sentence / string.
const letterPositions = function(sentence) {
  const results = {};//init result as object.
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i]; //iterate through each element of sentence
    if ((character !== " ") && (results[character])) {//if not a space and is present in results object.
      results[character].push(i);
    } else {
      results[character] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;