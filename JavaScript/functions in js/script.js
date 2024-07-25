// Function in js means a set of code that can be called by other code and resued as many times as we like

function doManyThings() {
  let num1 = prompt("Enter marks:");
  console.log(num1);

  let num2 = prompt("Enter marks:");
  console.log(num2);
  let totalMarks = +num1 + +num2;
  console.log("Total marks are:", totalMarks);
}

doManyThings();
doManyThings();
doManyThings();
