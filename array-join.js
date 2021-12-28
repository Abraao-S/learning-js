// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// Array.prototype.join()
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. 

// Parameters:
// separator (Optional): Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them. 

// Return value: A string with all array elements joined. If arr.length is 0, the empty string is returned. 

// IMPORTANT: If an element is undefined, null or an empty array [], it is converted to an empty string. 

// -----------------------------------------

// Example:

// creates a string with these 3 elements
const elements = ['Fire', 'Air', 'Water'];

// if no arguments are passes to the join() function, the default separator is coma (;)
console.log(elements.join());
// expected output: "Fire,Air,Water"

// now a blank space is passed as argument so the output puts together all three array elements
console.log(elements.join(''));
// expected output: "FireAirWater"

// dash is passed as an argument to the join() function
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
