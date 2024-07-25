// let arr = ["Apple", "Orange", "Pear"];

/* 
There are several ways to iterate through an array using loops in JavaScript
*/

/* For loop */
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

/* For of loop */
// for (let value of arr) {
//   console.log(value);
// }

/* For in loop */
// for (let i in arr) {
//   console.log(arr[i]);
// }

/* For each */
// arr.forEach((value) => console.log(value));     // A function passed as a parameter is called callback function

// let batch = new Array(5);
// console.log(batch);


/* Multidimentional array */
let multiDim = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(multiDim);

// console.table(multiDim);

// console.log(multiDim[2][0]);

// To print all the elements seperately we have to use two loops 

// for (let i = 0; i < multiDim.length; i++) {
//   for (let j = 0; j < multiDim[i].length; j++) {
//     console.log(multiDim[i][j]);
//   } 
//   console.log();
// }

let arr = ["t", "e", "s", "t"];

console.log(arr)

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

console.log(arr)