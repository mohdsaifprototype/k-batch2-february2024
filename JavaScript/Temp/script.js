/* 
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

// Create an empty object user.
// const user = new Object();
const user = {};
// console.log("User: ", user);
// Add the property name with the value John.
user.name = "John";
// console.log("User: ", user);

// Add the property surname with the value Smith.
user.surname = "Smith";
// console.log("User: ", user);

// Change the value of the name to Pete.
user.name = "Pete";
// console.log("User: ", user);

// Remove the property name from the object.
delete user.name;
// console.log("User: ", user);
