/*

# Array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

- The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

# Array.prototype.push()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

- The push() method adds one or more elements to the end of an array and returns the new length of the array. 


*/ 

// Array.prototype.push(): The push() method adds one or more elements to the end of an array and returns the new length of the array. 
let myArray = [];               //inicializes a new empty array
console.log(myArray.push());    // returns 0
myArray.push("a");              // adds 1 item to myArray with the value "a"
console.log(myArray.push());    // now returns 1

