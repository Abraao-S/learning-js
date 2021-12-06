/*

- https://eloquentjavascript.net/05_higher_order.html

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

- https://dev.to/shrihankp/higher-order-array-methods-in-javascript-14e7

## Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output.

### Array.prototype.map();
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

### Parameters:
- callbackFn: Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray. 

#### The callbackFn function accepts the following arguments:
- element: The current element being processed in the array.
- index (Optional): The index of the current element being processed in the array.
- array (Optional): The array map was called upon.
- thisArg (Optional): Value to use as this when executing callbackFn.

Return value: A new array with each element being the result of the callback function.

*/

let array1 = [2, 4, 6, 8];
console.log(`this is array 1: ${array1}`);

let array2 = array1.map(x => x * 2);    //calling the map() function to multiply by 2 every element of array1
console.log(`this is array 2 that multiplies each element using the map() function: ${array2}`);