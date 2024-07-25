/**
 * Topic: Date and time
 * @link https://javascript.info/date
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

let currentDate = new Date();
console.log("Current Date:", currentDate);
console.log("Current Date in string:", currentDate.toLocaleDateString());
console.log("Current Time in string:", currentDate.toLocaleTimeString());
console.log("Current Date and time in string:", currentDate.toLocaleString());

console.log("Current date:", currentDate.getDate());
console.log("Current day:", currentDate.getDay());
console.log("Current year:", currentDate.getFullYear());
console.log("Current hour:", currentDate.getHours());
console.log("Current millisecond:", currentDate.getMilliseconds());
console.log("Current minute:", currentDate.getMinutes());
console.log("Current month:", currentDate.getMonth());
console.log("Current second:", currentDate.getSeconds());
console.log("Current time:", currentDate.getTime());
console.log("Current timezone offset:", currentDate.getTimezoneOffset());
console.log("Current date and time:", currentDate.toDateString());
console.log("Current time:", currentDate.toTimeString());
console.log("Current date and time:", currentDate.toString());
console.log("Current date and time:", currentDate.valueOf());


/* 
Assignment:

1. Explore all the methods available in Date object
2. Create a stopwatch and stopwatch timer.
3. Create a countdown timer.
4. Also explore math object.

For Reference:
https://javascript.info/searching-elements-dom
https://javascript.info/basic-dom-node-properties
https://javascript.info/dom-attributes-and-properties
https://javascript.info/modifying-document

For Math object:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/