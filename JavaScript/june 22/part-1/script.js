/**
 * Topic: Array Methods
 * @link https://javascript.info/array-methods
 */

/* let arr = [1, 2];

console.log(arr)

// create an array from: arr and [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6 */

let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log( arr.concat(arrayLike) );