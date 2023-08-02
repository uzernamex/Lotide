# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @uzernamex/lotide`

**Require it:**

`const _ = require('@uzernamex/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `Function: assertArraysEqual` - This function compares two arrays and then prints a message specifying whether or not the arryys are equak. 

* `Function: assertEqual` - This is a function that takes in two values and returns true if they are equal and false otherwise.

* `Function: assertObjectsEqual` - A function that compares two objects and returns true if they are equal and false if they are not.

* `Function: countLetters` - This function takes a sentence as an input and returns a count of quantifying the occurence of each of the letters in the sentence.

* `Function: countOnly` - This is a function that takes in a collection of items and returns the spocified subset of the items.
  
* `Function: eqArrays` - A function that takes in two arrays and returns true if the arrays are equal and false if they are not equal. 
  
* `Function: eqObjects` - This function compares two objects and returns true if they are equal and false otherwise.

* `Function: findKey` - This function takes an object and callback and returns the first key that meets the criteria specified in callback.
  
* `Function: findKeyByValue` - A function that takes in an object and a value and returns the first key that corresponds to that value.
  
* `Function: flatten` - A function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
  
* `Function: head` - This function returns the first element in a given array.

* `Function: letterPositions` - This function receives a string and returns all indices of letter positions of the string.

* `Function: map` - A function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.

* `Function: middle` - This function returns center element of a given array.
  
* `Function: tail` - This function returns everything except the first element of the given array.
  
* `Function: without` - This function takes in a source array and an itemsToRemove array and returns only the items from the source array that are not present in the itemsToRemove array.