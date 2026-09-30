//! array - - array is a data structure that can hold multiple values in a single variable. 
// It is a collection of elements, each identified by an index or key. 
// In JavaScript, arrays are used to store lists of items and can be manipulated using various methods.


//! new keyword / array constructor - array is created using new keyword and Array constructor.
const arr1 = new Array(1, 2, 3, 4, 5); // empty array of length 5
const arr2 = new Array(5); // 5 empty items in the array, length is 5
console.log(arr1);
console.log(arr2);

//! array literal - array is created using square brackets [] and elements are separated by commas.
const numbers = [1, 2, 3, 4, 5]; // elements are separated by commas
console.log(numbers);
//? reading array elements - array elements are accessed using index, index starts from 0.
console.log(numbers[0]);
console.log(numbers[3]); // accessing the 4th element of the array, index starts from 0 

numbers[0] = 10; // changing the value of the first element of the array


//! length
console.log(numbers.length); // length of the array, number of elements in the array

//! adding new elements in the end of array - push() method is used to add new elements in the end of the array.
numbers.push(6, 32); // adds 6 and 32 to the end of the array
console.log(numbers);
const res = numbers.push(7 ,45,23); // adds 7 to the end of the array and returns the new length of the array
console.log(res);

//! adding from the beginning of the array 0 index
numbers.unshift(23); // adds 23 to the beginning of the array
console.log(numbers);

let res1 = numbers.unshift(12, 67, 23); // adds 12, 67, and 23 to the beginning of the array and returns the new length of the array
console.log(res1);

//! removing elements
//remove from the end of the array
numbers.pop(); // removes the last element of the array
console.log(numbers);

let res2 = numbers.pop(); // removes the last element of the array and returns the removed element
console.log(res2);

// remove from the beginning of the array
numbers.shift(); // removes the first element of the array
console.log(numbers);

let res3 = numbers.shift(); // removes the first element of the array and returns the removed element
console.log(res3);

//! splice(start_index, delete_count, ...items) method - used to add or remove elements from the array at a specific index
numbers.splice(2, 4, 90, 56, 72); // removes 4 elements from index 2 and adds 3 new elements
numbers.splice(2, 0, 90, 56, 72); // adds 3 new elements at index 2 without removing any elements
numbers.splice(2, 4); // removes 4 elements from index 2 without adding any new elements
console.log(numbers); 

//! todo: numbers.includes(), indexof(), lastIndexof()
console.log(numbers.includes(90)); // returns true if 90 is present in the array, otherwise false
console.log(numbers.includes(72)); // returns false if 72 is not present in the array

console.log(numbers.indexOf(90)); // returns the index of the first occurrence of 90 in the array, if not found returns -1
console.log(numbers.indexOf(72)); // returns -1 if 72 is not present in the array then if present returns the index of the first occurrence of 72 in the array

console.log(numbers.lastIndexOf(90)); // returns the index of the last occurrence of 90 in the array, if not found returns -1
console.log(numbers.lastIndexOf(23)); // returns -1 if 23 is not present in the array then if present returns the index of the last occurrence of 23 in the array
