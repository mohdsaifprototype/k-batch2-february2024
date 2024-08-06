// let myContent = `
//     <h2></h2>
//     <p>Name: <span id="name"></span></p>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet cum pariatur odit magni maiores necessitatibus, deserunt, ipsum laudantium recusandae quasi incidunt? Fugiat quas perferendis illum repudiandae officiis nam molestias soluta?</p>
// `;

let main = document.querySelector("main");

// main.innerHTML = myContent;

let heading = document.createElement("h2");
heading.innerText = "This heading is inserted from JS";

let userName = "Mohd Saif";

heading.style.textDecoration = "underline";
heading.classList.add("text-center");

let para1 = document.createElement("p");
para1.innerText = "Name: " + userName;

let para2 = document.createElement("p");
para2.innerText =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet cum pariatur odit magni maiores necessitatibus, deserunt, ipsum laudantium recusandae quasi incidunt? Fugiat quas perferendis illum repudiandae officiis nam molestias soluta?";

main.append(heading, para1, para2);
