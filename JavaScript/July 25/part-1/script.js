console.log("Sample message");

let image = document.querySelector("#image");

console.log(image);

let cardTitle = document.querySelector(".card-title");

// let source = image.getAttribute("src");
// console.log(source);

let counter = 101;

function next() {
  counter++;
  image.setAttribute("src", `https://picsum.photos/id/${counter}/600/400`);
  image.setAttribute("alt", `Photo ${counter}`);

  cardTitle.innerHTML = image.getAttribute("alt");
}

function previous() {
  counter--;
  image.setAttribute("src", `https://picsum.photos/id/${counter}/600/400`);
  image.setAttribute("alt", `Photo ${counter}`);

  cardTitle.innerHTML = image.getAttribute("alt");
}
