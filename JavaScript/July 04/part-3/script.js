let myElem = document.querySelector("#main");

// On the basis of nodes
console.log("My element:",myElem);
console.log("My element type:",myElem.nodeType);
console.log("My element parent:",myElem.parentNode);
console.log("My element parent type:",myElem.parentNode.nodeType);
console.log("My element next sibling:",myElem.nextSibling);
console.log("My element next sibling type:",myElem.nextSibling.nodeType);
console.log("My element child nodes:",myElem.childNodes);
console.log("My element child nodes type:",myElem.childNodes[0].nodeType);
console.log("--------------------------------------------------------------")

// On the basis of element
console.log("My element first child:",myElem.firstChild);
console.log("My element first child type:",myElem.firstChild.nodeType);
console.log("My element last child:",myElem.lastChild);
console.log("My element last child type:",myElem.lastChild.nodeType);
console.log("My element first element child:",myElem.firstElementChild);
console.log("My element first element child type:",myElem.firstElementChild.nodeType);
console.log("My element last element child:",myElem.lastElementChild);
console.log("My element last element child type:",myElem.lastElementChild.nodeType);
console.log("My element next element sibling:",myElem.nextElementSibling);
console.log("My element next element sibling type:",myElem.nextElementSibling.nodeType);
console.log("My element previous element sibling:",myElem.previousElementSibling);
console.log("My element previous element sibling type:",myElem.previousElementSibling.nodeType);