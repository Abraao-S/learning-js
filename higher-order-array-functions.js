/*

- https://eloquentjavascript.net/05_higher_order.html



- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

- https://dev.to/shrihankp/higher-order-array-methods-in-javascript-14e7

## Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output.

### Array.prototype.map()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

### Parameters:
- callbackFn: Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray. 

#### The callbackFn function accepts the following arguments:
- element: The current element being processed in the array.
- index (Optional): The index of the current element being processed in the array.
- array (Optional): The array map was called upon.
- thisArg (Optional): Value to use as this when executing callbackFn.

### Return value: A new array with each element being the result of the callback function.

##

### Array.prototype.reduce()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

- The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. 

- The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0). 

*/

//map() example
let array1 = [2, 4, 6, 8];
console.log(`this is array 1: ${array1}`);
let array2 = array1.map(x => x * 2);    //calling the map() function to multiply by 2 every element of array1
console.log(`this is array 2 that multiplies each element using the map() function: ${array2}`);


//reduce() example
const array3 = [1, 2, 3, 4, 5];
const sum = array3.reduce( (accumulator, current) => accumulator + current, 0);
console.log(sum); //expected result: 15
//if the initial value "0" was not provided, the reduce function would take the array[0] as the initial value, in this case the number "1". But the result, in this case, would be the same!

//another reduce() example
const array4 = [1, 2, 3, 4, 5, 6];
const add = ( (accumulator, current) => accumulator + current );
const result = array4.reduce(add);
console.log(result);
