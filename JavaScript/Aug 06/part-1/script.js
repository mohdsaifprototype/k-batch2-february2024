let btn1 = document.querySelector("#btn-1");

// btn1.addEventListener("mousedown", () => {
//   btn1.classList.add("btn-clicked");
// })

// btn1.addEventListener("mouseup", () => {
//   btn1.classList.remove("btn-clicked");
// })

btn1.addEventListener("click", function () {
  btn1.classList.toggle("btn-clicked");
})

console.log(btn1.classList.contains("btn"));    // Will return true if the classname exist in the element

console.log(btn1.className)     // It will return all the classes present in the element


btn1.className = "btn-clicked btn";  // It will replace all the classes