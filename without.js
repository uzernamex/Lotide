const without = function(source, itemsToRemove) {
  const result = [];
  for (let i of source) {
  if (itemsToRemove.includes(i)) {
      result.push(i);
    }
  }
  
return result;
};

console.log(without([1, 2, 3], [1])); 