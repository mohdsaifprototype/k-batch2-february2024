/**
 * Topic: Array Destructuring
 * @link https://javascript.info/destructuring-assignment
 */

let student = ["Kunal", "GWDD", 19, 3.14, false];

// let [name, course, age, pi, married] = student;

// console.log("Name:", name);
// console.log("Course:", course);
// console.log("Age:", age);
// console.log("Pi:", pi);
// console.log("Married:", married)

let [name, course, , , pi] = student;
// let [name, course, ...seprateArr] = student;

console.log("Name:", name);
console.log("Course:", course);
// console.log("Age:", age);
// console.log("Pi:", pi);

console.log(seprateArr);
