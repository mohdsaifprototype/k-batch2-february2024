/* Value is copied when we use primitives */
// let userName = "Kunal"
// let admin = userName;

// console.log(`User name: ${userName} \nAdmin: ${admin}`);

// admin = "Mohd Saif";
// console.log("-------------After-------------")
// console.log(`User name: ${userName} \nAdmin: ${admin}`);

/* Reference is copied when we use non-primitives */

let user = {};
user.name = "Kunal";

let admin = user;

console.log(`User name: ${user.name} \nAdmin: ${admin.name}`);

admin.name = "Mohd Saif";
console.log("-------------After-------------")
console.log(`User name: ${user.name} \nAdmin: ${admin.name}`)