const middle = function(arr) {
  if (arr.length < 2) {
    return [];
  }
  const middlemost = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[middlemost - 1], arr[middlemost]];
  } else {
    return [arr[middlemost]];
  }
};

module.exports = middle;