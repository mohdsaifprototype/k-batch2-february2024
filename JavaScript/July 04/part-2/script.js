// Topic: JSON

// JSON stands for JavaScript Object Notation
// It is a lightweight data-interchange format
// It is easy to read and write
// It is used to store data in web applications
// It has two methods: stringify() and parse()

let person = {
  name: "Kunal",
  age: 21,
  hasPets: false
};

console.log(person);
console.log(typeof person);

let personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

let personObj = JSON.parse(personJSON);
console.log(personObj);
console.log(typeof personObj)