let student = {
  name: "Kunal",
  age: 21,
  nextYear: function () {
    this.age++;
  }
};

console.log("Current age:",student.age);

student.nextYear();
student.nextYear();
student.nextYear();

console.log("Next year age:",student.age);