// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// Array.from(): The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

// Description: 
// Array.from() lets you create Arrays from:
// • array-like objects (objects with a length property and indexed elements); or 
// • iterable objects (objects such as Map and Set). 

// Parameters: 
// arrayLike (required): An array-like or iterable object to convert to an array.
// mapFn (optional): Map function to call on every element of the array.
// thisArg (optional): Value to use as this when executing mapFn.

// Return value: A new Array instance.

// -------------------------
// Example:

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
