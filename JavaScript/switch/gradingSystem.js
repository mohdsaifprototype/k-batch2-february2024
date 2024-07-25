/* 
A = 90 - 100
B = 80 - 89
C = 70 - 79
D = 60 - 69
F = 0 - 59
*/

let grade = "G";

switch (grade) {
  case "A":
    console.log("90 - 100");
    break;
  case "B":
    console.log("80 - 89");
    break;
  case "C":
    console.log("70 - 79");
    break;
  case "D":
    console.log("60 - 69");
    break;
  case "F":
    console.log("0 - 59");
    break;
  default:
    console.log("Invalid grade");
    break;
}
