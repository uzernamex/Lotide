const countOnly = function(allItems, itemsToCount) {
  const results = {}; //init result as an empty object
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) { //if the results contain the item then add to count
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }
  return results;
};

module.exports = countOnly;