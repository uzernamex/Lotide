const assertEqual = require('../assertEqual');
const assertArraysEqual = ('../require assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([12, 2, 3], [1, 2, 3]);